import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { LoginService } from './../services/login.service';


@Component({
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( LoginService );
  private router      = inject( Router )


  public myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });


  login() {
    const { email, password } = this.myForm.value;

    /* this.authService.loginCliente(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error' )
        }
      }) */

  }
  async loginCliente() {
    let loginForm: FormGroup = this.myForm;
    let email: string = loginForm.get("email")?.value;
    let password: string = loginForm.get("password")?.value;



     let loginResponse = await this.authService.loginCliente(email,password);
    // if(!loginResponse) {
    //   alert("email o contraseña introducidos son incorrectos");
    //   return;
    // }
  }
}
