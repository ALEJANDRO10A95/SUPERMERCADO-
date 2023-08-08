import { Injectable } from '@angular/core';
import { Cliente } from 'src/clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = 'http://localhost:3000';

  constructor() { }

  registroNuevoCliente(email: string, password: string) {
    //TODO
  }

  async getAllClientes(): Promise<Cliente[]> {
    const data: Response = await fetch(this.url + "/clientes");
    return await data.json() ?? [];
  }

  async getClienteById(id: number): Promise<Cliente|undefined> {
    const response: Response = await fetch(this.url + "/clientes/" + id);
    let object: Cliente = await response.json();
    if(object == undefined) {
      return undefined;
    }
    
    return new Cliente(object.id,object.nombre,object.apellidos,object.email,object.contraseña,object.telefono);
  }

  async getClienteByEmail(email: string): Promise<Cliente|undefined> {
    const response: Response = await fetch(this.url + "/clientes?email=" + email);
    let array = await response.json();
    
    if(array.length == 0) {
      return undefined;
    }
    
    let object = array[0];
    return new Cliente(object.id,object.nombre,object.apellidos,object.email,object.password,object.telefono);
  }
}
