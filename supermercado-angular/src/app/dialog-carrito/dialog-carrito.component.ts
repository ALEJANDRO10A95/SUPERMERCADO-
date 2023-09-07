import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css']
})
export class DialogCarritoComponent {
  esDialogVisible: boolean = false;
  cantidadEnCarrito: number = 0;
  mostrarCarga : boolean = false;

  constructor() { }

  setCantidadEnCarrito(cantidad: number) {
    this.cantidadEnCarrito = cantidad;
  }

  show() {
  // Muestra el componente de carga al hacer clic en el botón del carrito
  this.mostrarCarga = true;


  this.simularCarga().subscribe(() => {
  // Utiliza un temporizador para ocultar el componente de carga después de unos segundos
  timer(1000).subscribe(() => {
    this.mostrarCarga = false;
    this.esDialogVisible = true; // Muestra el diálogo del carrito
  });
})

}

simularCarga() {
  return new Observable<void>((observer) => {
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 1000); // Simula 2 segundos de carga, ajusta según sea necesario
  });
}

}
