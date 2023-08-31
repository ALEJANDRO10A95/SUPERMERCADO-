import { Categorias } from "./categorias";

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: Categorias;
    cantidad: number;
    precio: number;
    imagen: string;
}