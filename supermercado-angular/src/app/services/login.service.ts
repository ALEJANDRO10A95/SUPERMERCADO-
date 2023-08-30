import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from 'src/interfaces/cliente';
import { ClienteService } from './cliente.service';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //BehaviorSubject es un tipo de observable
  private clienteSubject: BehaviorSubject<Cliente | undefined> = new BehaviorSubject<Cliente | undefined>(undefined);
  //Observable publico al que se pueden susbribir otros componentes
  public clienteSubject$: Observable<Cliente | undefined> = this.clienteSubject.asObservable();

  constructor(private clienteService: ClienteService) {
  }

  async registroNuevoCliente(nombre: string, apellido: string, email: string, password: string): Promise<Response> {
    let passwordCifrada = bcrypt.hashSync(password, 10);
    console.log("password cifrada:" + passwordCifrada);

    await this.clienteService.registroNuevoCliente(nombre, apellido, email, passwordCifrada);

    const resonseOptions = { status: 200 };
    return new Response(null, resonseOptions);
  }

  async loginCliente(email: string, password: string): Promise<Response> {
    let clienteExistente: Cliente|undefined = await this.clienteService.getClienteByEmail(email);
    if (!clienteExistente) {
      const resonseOptions = { status: 401 };
      return new Response(null, resonseOptions);
    }

    let passwordCliente = clienteExistente.pass;
    let esPasswordCorrecta: boolean = this.validaPasswordCliente(password, passwordCliente);
    if (!esPasswordCorrecta) {
      const resonseOptions = { status: 401 };
      return new Response(null, resonseOptions);
    }

    /*Se han pasado correctamente las comprobaciones: El Cliente introducido existe, y la contraseña es correcta.
    Siendo así, devolvemos Response que incluye un token JWT generado*/
    this.clienteSubject.next(clienteExistente);

    const resonseOptions = { status: 200 };
    let jwtBearerToken: string = generaToken(clienteExistente);
    //let responseBody: string = JSON.stringify(clienteExistente.nombre);
    return new Response(jwtBearerToken, resonseOptions);

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

function generaToken(cliente: Cliente): string {
  /* let secretKey: string = "Clave secreta!";
  let payload = {
    algorithm: 'RS256',
    expiresIn: 120,
    subject: cliente.email
  }
  return jwt.encode(payload, secretKey); */
  return "";
}
