import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css']
})
export class DialogCarritoComponent {
  esDialogVisible: boolean = false;
  cantidadEnCarrito: number = 0;
  
  constructor() { }

  setCantidadEnCarrito(cantidad: number) {
    this.cantidadEnCarrito = cantidad;
  }

  show() {
    this.esDialogVisible = true;
  }
}
