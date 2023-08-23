import { Compra } from './compra.js';
export class Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    pass: string;
    telefono: string;
    compras: Compra[] = [];

    constructor(id: number, nombre: string, apellidos: string, email: string, pass: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.pass = pass;
        this.telefono = telefono;
    }

    public agregaCompraRealizada(compra: Compra): void {
        this.compras.push(compra);
    }
}