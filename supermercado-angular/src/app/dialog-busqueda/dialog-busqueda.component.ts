import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-busqueda',
  templateUrl: './dialog-busqueda.component.html',
  styleUrls: ['./dialog-busqueda.component.css']
})
export class DialogBusquedaComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
      const farewellMessages = [
        "Hasta luego, cerrando el diálogo.",
        "Espero haberte ayudado, ¡adiós diálogo!",
        "¡Nos vemos en la próxima! Cerrando el diálogo.",
        "Diálogo cerrado, ¡que tengas un buen día!",
        "Deseando que hayas encontrado lo que buscabas. Cierro el diálogo."
      ];

      const randomFarewell = farewellMessages[Math.floor(Math.random() * farewellMessages.length)];
      console.log(randomFarewell);

      this.visible = false;
    }
}
