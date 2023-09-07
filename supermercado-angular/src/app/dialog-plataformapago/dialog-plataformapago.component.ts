import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-plataformapago',
  templateUrl: './dialog-plataformapago.component.html',
  styleUrls: ['./dialog-plataformapago.component.css']
})
export class DialogPlataformapagoComponent {

  esVisible : boolean = false;

  mostrarCarrito(){
    this.esVisible = !this.esVisible;
  }
}
