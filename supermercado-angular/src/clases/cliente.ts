import { Compra } from './compra.js';
export class Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    contraseña: string;
    telefono: string;
    compras: Compra[] = [];

    constructor(id: number, nombre: string, apellidos: string, contraseña: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.contraseña = contraseña;
        this.telefono = telefono;
    }

    public agregaCompraRealizada(compra: Compra): void {
        this.compras.push(compra);
    }
}