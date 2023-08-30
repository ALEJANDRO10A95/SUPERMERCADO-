import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/interfaces/cliente';
import { LoginService } from '../services/login.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogClienteComponent {
  clienteIngresado?: Cliente;
  esDialogVisible: boolean = false;

  displayDialog: boolean = false;
  displayCreateAccountDialog: boolean = false;

  items: MenuItem[] | undefined;
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)])
  });
  registerForm: FormGroup = new FormGroup({
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)]),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.clienteSubject$.subscribe(
      (cliente) => {
        this.clienteIngresado = cliente;
      }
    )

    this.items = [
      {
        items: [
          {
            label: 'Iniciar sesión',
            command: (event: any) => {
              this.showDialog();
            }
          },
          {
            label: 'Crear cuenta',
            command: (event: any) => {
              this.showCreateAccountDialog();
            }
          }
        ]
      },
    ];
  }

  async loginCliente() {
    let email: string = this.loginForm.get("email")?.value;
    let password: string = this.loginForm.get("password")?.value;

    let loginResponse: Response = await this.loginService.loginCliente(email, password);
    if (!loginResponse.ok) {
      alert("email o contraseña introducidos son incorrectos");
      return;
    }

    this.esDialogVisible = false;
  }

  async registraCliente() {
    let nombre: string = this.registerForm.get("nombre")?.value;
    let apellido: string = this.registerForm.get("apellido")?.value;
    let email: string = this.registerForm.get("email")?.value;
    let password: string = this.registerForm.get("password")?.value;

    let loginResponse: Response = await this.loginService.registroNuevoCliente(nombre, apellido, email, password);
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
