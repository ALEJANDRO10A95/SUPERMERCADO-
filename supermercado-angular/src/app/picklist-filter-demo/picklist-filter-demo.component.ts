import { Component } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';
import { PuntuacionComponent } from '../puntuacion/puntuacion.component';

@Component({
  selector: 'app-picklist-filter-demo',
  templateUrl: './picklist-filter-demo.component.html',
  styleUrls: ['./picklist-filter-demo.component.css']
})
export class PicklistFilterDemoComponent {


  visible: boolean = false;

  sourceProducts!: Producto[];
  targetProducts: Producto[] = [];
  agregaProducto: any;
  productSelected: any;
  onClose: any;
  value: any;
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sourceProducts = this.productService.getProducts();
    console.log(this.sourceProducts);
  }



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

onProductSelect(product: Producto) {
  this.agregaProducto(product);
  this.productSelected.emit(product);
}

// addProductFromPicklist(product: Producto) {
//   this.agregaProducto(product);
// }


addProductFromPicklist(producto: Producto): void {
  const productoYaEnCarrito: Producto | undefined = this.products.find((p: { id: number; }) => p.id === producto.id);

  if (productoYaEnCarrito === undefined) {
    this.products.push(producto);
  } else {
    productoYaEnCarrito.cantidad++;
  }
}



eliminarProducto(producto: Producto): void {
  this.products = this.products.map((p: { id: number; cantidad: number; }) => {
    if (p.id === producto.id) {
      return { ...p, cantidad: Math.max(p.cantidad - 1, 0) };
    }
    return p;
  }).filter((p: { cantidad: number; }) => p.cantidad > 0);
}

// quitarProducto(product: Producto) {
//   this.quitarProducto(product);

// }

}

