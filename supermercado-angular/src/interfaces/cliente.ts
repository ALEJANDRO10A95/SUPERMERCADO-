import { Compra } from './compra.js';
export interface Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    pass: string;
    telefono: string;
    compras: Compra[];
}