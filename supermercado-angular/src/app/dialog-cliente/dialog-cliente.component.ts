import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/interfaces/cliente';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogClienteComponent {
  clienteIngresado?: Cliente;
  esDialogVisible: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)])
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  async loginCliente() {
    let loginForm: FormGroup = this.loginForm;
    let email: string = loginForm.get("email")?.value;
    let password: string = loginForm.get("password")?.value;

    let loginResponse: Response = await this.loginService.loginCliente(email,password);
    if(!loginResponse.ok) {
      alert("email o contraseña introducidos son incorrectos");
      return;
    }

    this.esDialogVisible = false;
  }

  logoutCliente() {
    this.loginService.logoutCliente();
  }

  showDialog() {
    this.esDialogVisible = true;
  }
}
