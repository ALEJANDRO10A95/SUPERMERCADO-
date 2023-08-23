import { Injectable } from '@angular/core';
import { Cliente } from 'src/interfaces/cliente';

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
    const data: Response = await fetch(this.url + "/cliente");
    return await data.json() ?? [];
  }

  async getClienteById(id: number): Promise<Cliente|undefined> {
    const data: Response = await fetch(this.url + "/cliente/" + id);
    return await data.json();
  }

  async getClienteByEmail(email: string): Promise<Cliente|undefined> {
    const response: Response = await fetch(this.url + "/cliente/email/" + email);

    let data;
    try{
      data = await response.json();
    }
    catch{
    }
    return data;
  }
}
