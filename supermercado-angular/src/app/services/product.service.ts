import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient){ }

  async getAllProductos(): Promise<Producto[]> {
    const data: Response = await fetch(this.url + "/producto");
    return await data.json() ?? [];
  }

  async getProductoById(id: number): Promise<Producto|undefined> {
    const data: Response = await fetch(this.url + "/producto/" + id);
    return await data.json();
  }

  async getProductosByNombre(texto: string): Promise<Producto[]> {
    const data: Response = await fetch(this.url + "/producto/nombre/" + texto);
    return await data.json() ?? [];
  }

  async nuevoProducto (nombre: string,descripcion: string, 
    categoria: string, cantidad: number, precio: number, imagen: string ): Promise<Response> {
    let params = new HttpParams({
        fromObject: {'nombre': nombre, 'descripcion': descripcion, 'categoria': categoria, 'cantidad': cantidad, 'precio': precio, 'imagen': imagen}

      });

    let options = {
      headers: new HttpHeaders ().set ( 'Content-Type', 'application/x-www-form-urlencoded')
    };
    this.http.post(this.url+'/producto', params, options)
    .subscribe (response => {
      return response;
    });

    return new Response;
  }
}