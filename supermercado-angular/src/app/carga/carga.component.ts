import { Component, ElementRef, Injectable, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})

@Injectable()
export class CargaComponent implements OnInit {
  @ViewChild("loader") myloader:ElementRef | undefined;

constructor(private renderer: Renderer2){}
  ngOnInit(): void {

  }

mostrar() {

this.renderer.addClass(this.myloader?.nativeElement, "loading");


 }

 ocultar(){
  this.renderer.removeClass(this.myloader?.nativeElement, "loading");
 }


}
