import { Component } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { Producto } from 'src/clases/producto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-picklist-filter-demo',
  templateUrl: './picklist-filter-demo.component.html',
  styleUrls: ['./picklist-filter-demo.component.css']
})
export class PicklistFilterDemoComponent {
 /*  sourceProducts!: Producto[];

  targetProducts!: Producto[];

  constructor(
    private productService: ProductService,
    // private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sourceProducts = this.productService.getProducts();
          // this.sourceProducts = producto;
          // this.cdr.markForCheck();
      // });
      this.targetProducts = [];
  }
   show (): void {

  } */



  sourceProducts!: Producto[];
  targetProducts: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sourceProducts = this.productService.getProducts();
  }
}

