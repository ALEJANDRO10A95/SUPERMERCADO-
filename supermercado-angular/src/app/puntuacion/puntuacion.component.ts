import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent {
  @Input() producto!: any; // Asumiendo que tienes un modelo para el producto

  // Aquí puedes añadir lógica para manejar la puntuación del producto
  puntuacion: number = 0;

  aumentarPuntuacion() {
    if (this.puntuacion < 5) {
      this.puntuacion++;
    }
  }

  disminuirPuntuacion() {
    if (this.puntuacion > 0) {
      this.puntuacion--;
    }
  }

}



// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-puntuacion',
//   templateUrl: './puntuacion.component.html',
//   styleUrls: ['./puntuacion.component.css']
// })
// export class PuntuacionComponent {
//   @Input() producto!: any; // Asumiendo que tienes un modelo para el producto
//   puntuacion: number = 0;
//   maxPuntuacion: number = 5;

//   asignarPuntuacion(valor: number) {
//     this.puntuacion = valor;
//   }
// }
