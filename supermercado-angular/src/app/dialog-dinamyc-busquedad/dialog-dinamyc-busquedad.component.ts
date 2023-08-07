import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Producto } from 'src/clases/producto';
import { ProductlistdemoComponent } from '../productlistdemo/productlistdemo.component';
import { PicklistFilterDemoComponent } from '../picklist-filter-demo/picklist-filter-demo.component';

@Component({
  selector: 'app-dialog-dinamyc-busquedad',
  templateUrl: './dialog-dinamyc-busquedad.component.html',
  styleUrls: ['./dialog-dinamyc-busquedad.component.css'],
  
})
export class DialogDinamycBusquedadComponent {
  constructor(public dialogService: DialogService, public messageService: MessageService) {}
  // constructor(public ref: DynamicDialogRef) { }
  ref: DynamicDialogRef | undefined;



  show() {
      this.ref = this.dialogService.open(ProductlistdemoComponent, {
          header: ' BUSQUEDAD DE PRODUCTOS',
          width: '70%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: true
      });

      this.ref.onClose.subscribe((product: Producto) => {
          if (product) {
              this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.nombre });
          }
      });

      this.ref.onMaximize.subscribe((value) => {
          this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: €{value.maximized}` });
      });
  }

 /*  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  } */

  /*  ngOnInit(): void {
     this.ref.content = PicklistFilterDemoComponent;
   } */

  closeDialog() {
    if(this.ref){
    this.ref.close();
    }
  }

}

