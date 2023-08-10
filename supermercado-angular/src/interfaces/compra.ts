import { Producto } from './producto.js';
import { Cliente } from './cliente.js';

export class Compra {
    id: number;
    fecha: Date;
    cliente: Cliente;
    productos: Producto[];

    constructor(id: number, fecha: Date, cliente: Cliente, productos: Producto[]){
        this.id = id;
        this.fecha = fecha;
        this.cliente = cliente;
        this.productos = productos;
    }
}