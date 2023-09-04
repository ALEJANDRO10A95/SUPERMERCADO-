import { Component } from '@angular/core';

@Component({
  selector: 'app-plataforma-pago',
  templateUrl: './plataforma-pago.component.html',
  styleUrls: ['./plataforma-pago.component.css']
})
export class PlataformaPagoComponent {
  ngOnInit() : void{
    console.log("{{'Plataforma de pago'|translate}}")
    console.log("PLATAFORMA DE PAGO HABILITADA")
  }

  ngOnDestroy() : void{
    console.log("PLATAFORMA DE PAGO CERRADA")

  }
}
