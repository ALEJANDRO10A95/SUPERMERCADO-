import { Injectable } from '@angular/core';
import { Producto } from 'src/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000';

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
}