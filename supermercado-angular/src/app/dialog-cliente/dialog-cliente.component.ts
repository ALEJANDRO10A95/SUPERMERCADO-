import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/interfaces/cliente';
import { LoginService } from '../services/login.service';
import { MenuItem, MessageService } from 'primeng/api';
import  Swal  from 'sweetalert2'

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
    let loginForm: FormGroup = this.loginForm;
    let email: string = loginForm.get("email")?.value;
    let password: string = loginForm.get("password")?.value;

    let loginResponse: Response = await this.loginService.loginCliente(email,password);
    if(!loginResponse.ok) {
      Swal.fire({
        title: 'Error!',
        text: 'Contraseña mal introducida',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "var(--primary-color)",
        confirmButtonAriaLabel:"var(--primary-color)",
        color: "var(--text-color)",
        timer: 3000,
        timerProgressBar: true,
        background: "var(--surface-overlay)"
      })
      return;
    }

    this.esDialogVisible = false;
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
