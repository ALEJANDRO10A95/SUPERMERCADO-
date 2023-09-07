import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  async registroNuevoCliente(nombre: string, apellidos: string, email: string, pass: string) {
    let params = new HttpParams({
      fromObject: { 'nombre': nombre, 'apellidos': apellidos, 'email': email, 'pass': pass }
    });

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };


    return this.http.post<{"message" : string, "status" : string, "result" : any, "error" : any}>(this.url + '/auth/register', params, options)

  }

  async getAllClientes(): Promise<Cliente[]> {
    const data: Response = await fetch(this.url + "/cliente");

    return await data.json() ?? [];
  }

  async getClienteById(id: number): Promise<Cliente | undefined> {
    const data: Response = await fetch(this.url + "/cliente/" + id);
    return await data.json();
  }

  async getClienteByEmail(email: string): Promise<Cliente | undefined> {
    const response: Response = await fetch(this.url + "/cliente/email/" + email);

    let data;
    try {
      data = await response.json();
    }
    catch {
    }
    return data;
  }
}
