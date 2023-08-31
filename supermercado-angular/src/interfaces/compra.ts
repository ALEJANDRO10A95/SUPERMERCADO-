import { Producto } from './producto.js';
import { Cliente } from './cliente.js';

export interface Compra {
    id: number;
    fecha: Date;
    cliente: Cliente;
    productos: Producto[];
}