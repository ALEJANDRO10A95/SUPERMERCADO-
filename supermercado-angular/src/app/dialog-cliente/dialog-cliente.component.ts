import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/interfaces/cliente';
import { LoginService } from '../services/login.service';
import { MenuItem, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../services/loader.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css'],
})
export class DialogClienteComponent {
  clienteIngresado: Cliente | undefined;

  esDialogVisible: boolean = false;

  displayDialog: boolean = false;
  displayCreateAccountDialog: boolean = false;

  items: MenuItem[] | undefined;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  registerForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private translate: TranslateService,
    private loginService: LoginService,
    public loadingService: LoadingService,
    private cookies : CookieService
  ) {}

  iniciarSesionTraducido: string = this.translate.instant('Iniciar sesión');
  crearCuentaTraducido: string = this.translate.instant('Crear cuenta');

  ngOnInit(): void {

    if(this.cookies.get("token")){
      let decode : any = jwt_decode(this.cookies.get("token"));
      this.clienteIngresado! = {nombre : decode.nombre, email : decode.email};
      this.items = [
        {
          items: [
            {
              label: 'Cerrar Sesión',
              command: (event: any) => {
                this.logoutCliente();
              },
            }
          ],
        },
      ];
    }else{
      this.loginService.clienteSubject$.subscribe((cliente) => {
        this.clienteIngresado = cliente;
      });

      this.items = [
        {
          items: [
            {
              label: 'Iniciar sesión',
              command: (event: any) => {
                this.showDialog();
              },
            },
            {
              label: 'Crear cuenta',
              command: (event: any) => {
                this.showCreateAccountDialog();
              },
            },
          ],
        },
      ];
    }

  }

  async loginCliente() {
    let email: string = this.loginForm.get('email')?.value;
    let password: string = this.loginForm.get('password')?.value;
    this.loadingService.show();

    try{
    let loginResponse : Response = await this.loginService.loginCliente(
      email,
      password
    );
      console.log(loginResponse)
      this.loadingService.hide();
      if (loginResponse.status === 200) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translate.instant('ERROR InicioSesion'),
          timer: 2000,
          timerProgressBar: true,
          background: '#282f33',
          color: 'rgb(229 229 229)',
        });
      }else{
        this.displayDialog = false;
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: this.translate.instant('SUCCESS inicio sesion'),
          timer: 2000,
          timerProgressBar: true,
          background: '#282f33',
          color: 'rgb(229 229 229)',
        });
        this.ngOnInit();
      }

    } catch (error) {
      this.loadingService.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('ERROR InicioSesion'),
        timer: 2000,
        timerProgressBar: true,
        background: '#282f33',
        color: 'rgb(229 229 229)',
      });
      console.log(error);
    }

    return;
  }

  async registraCliente() {
    let nombre: string = this.registerForm.get('nombre')?.value;
    let apellido: string = this.registerForm.get('apellido')?.value;
    let email: string = this.registerForm.get('email')?.value;
    let password: string = this.registerForm.get('password')?.value;
    let loginResponse;
    try {
      let loginResponse: boolean = await this.loginService.registroNuevoCliente(
      nombre,
      apellido,
      email,
      password
    );
    } catch (error) {
      console.log(error)
    }


    if(loginResponse === true){
      Swal.fire({
        icon: 'success',
        text: this.translate.instant('SUCCESS creacion usuario'),
        // timer: 2000,
        // timerProgressBar: true,
        background: '#282f33',
        color: 'rgb(229 229 229)',
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('ERROR Creacion usuario'),
        // timer: 2000,
        // timerProgressBar: true,
        background: '#282f33',
        color: 'rgb(229 229 229)',
      });
    }
  }

  logoutCliente() {
    this.loginService.logoutCliente();
  }

  showDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  showCreateAccountDialog() {
    this.displayCreateAccountDialog = true;
  }

  closeCreateAccountDialog() {
    this.displayCreateAccountDialog = false;
  }
}
