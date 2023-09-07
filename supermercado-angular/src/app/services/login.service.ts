import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from 'src/interfaces/cliente';
import { ClienteService } from './cliente.service';
import * as bcrypt from 'bcryptjs';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //BehaviorSubject es un tipo de observable
  private clienteSubject: BehaviorSubject<Cliente | undefined> = new BehaviorSubject<Cliente | undefined>(undefined);
  //Observable publico al que se pueden susbribir otros componentes
  public clienteSubject$: Observable<Cliente | undefined> = this.clienteSubject.asObservable();

  constructor(private clienteService: ClienteService, cookies : CookieService) {
  }

  async registroNuevoCliente(nombre: string, apellido: string, email: string, password: string): Promise<any> {
    const respuesta = await this.clienteService.registroNuevoCliente(nombre, apellido, email, password);

    respuesta.subscribe(respuesta => {
      console.log(respuesta);
      if(respuesta.status === "OK!"){
        return true;
      }else{
        return respuesta.error.message;
      }

    })



  }

  async loginCliente(email: string, password: string):Promise<any> {

    let clienteExistente = await this.clienteService.getTokenLogin(email, password);


      clienteExistente.subscribe((res: any) => {

        return jwt_decode(res.result.token)

      },(error: string) => {
        return error
      })


    // if (!clienteExistente) {
    //   const resonseOptions = { status: 401 };
    //   return new Response(null, resonseOptions);
    // }

    // let passwordCliente = clienteExistente.pass;
    // let esPasswordCorrecta: boolean = this.validaPasswordCliente(password, passwordCliente);
    // if (!esPasswordCorrecta) {
    //   const resonseOptions = { status: 401 };
    //   return new Response(null, resonseOptions);
    // }

    // /*Se han pasado correctamente las comprobaciones: El Cliente introducido existe, y la contraseña es correcta.
    // Siendo así, devolvemos Response que incluye un token JWT generado*/
    // this.clienteSubject.next(clienteExistente);

    // const resonseOptions = { status: 200 };    //let responseBody: string = JSON.stringify(clienteExistente.nombre);
    // return new Response(clienteExistente., resonseOptions);

  }

  logoutCliente() {
    // remove user from local storage and set current user to null
    //localStorage.removeItem('user');   Si guardamos algún valor de Cliente en localStorage, también debemos borrarlo ahora
    this.clienteSubject.next(undefined);
  }

  validaPasswordCliente(passwordIntroducida: string, passwordCliente: string): boolean {
    return bcrypt.compareSync(passwordIntroducida, passwordCliente);
  }
}

// function jwt_decode(token: any): any {
//   throw new Error('Function not implemented.');
// }

