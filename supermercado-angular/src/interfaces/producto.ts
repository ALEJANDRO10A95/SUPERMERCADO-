import { Categorias } from "./categorias";

export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: Categorias;
    cantidad: number;
    precio: number;
    imagen: string;

    constructor(id: number, nombre: string, descripcion: string, categoria: Categorias, cantidad: number,
        precio: number, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
    }
}