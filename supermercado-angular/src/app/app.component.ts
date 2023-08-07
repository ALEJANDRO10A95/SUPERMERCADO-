import { Component } from '@angular/core';
import { Categorias } from 'src/clases/categorias';
import { Cliente } from 'src/clases/cliente';
// import { Producto } from 'src/clases/producto';
// import { NgModel } from '@angular/forms';


import { PicklistFilterDemoComponent } from './picklist-filter-demo/picklist-filter-demo.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'supermercado-angular';
  searchValue: string = '';
  picklistDialogRef: DynamicDialogRef | undefined;
   value: string | undefined;
  cliente: Cliente = new Cliente(1, "Julio", "Pérez", "12334", "123415");
  // constructor(private dialogService: DialogService) {}

  /* openPicklistDialog() {
  this.picklistDialogRef = this.dialogService.open(PicklistFilterDemoComponent,{
  header: 'Búsqueda de Productos',
  width: '70%',
  contentStyle: { overflow: 'auto' },
  baseZIndex: 10000,
  });

    this.picklistDialogRef.onClose.subscribe((selectedProducts: any) => {
    // PuedO  realizar acciones con los productos seleccionados si quisiera
    });

  } */
}

