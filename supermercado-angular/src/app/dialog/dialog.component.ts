import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Producto } from 'src/interfaces/producto';
import { ProductlistdemoComponent } from '../productlistdemo/productlistdemo.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [DialogService, MessageService, DynamicDialogRef],
})
export class DialogComponent {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(ProductlistdemoComponent, {
        header: 'LISTADO DE PRODUCTOS',
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

ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}












