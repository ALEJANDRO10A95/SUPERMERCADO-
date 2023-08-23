import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productlistdemo',
  templateUrl: './productlistdemo.component.html',
  styleUrls: ['./productlistdemo.component.css']
})

export class ProductlistdemoComponent {
  products: Producto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    /* this.productService.getAllProductos()
    .then(data => {
      this.products = data;
    }); */
  }

  agregaProducto(producto: Producto): void {
    const productoYaEnCarrito: Producto | undefined = this.products.find(p => p.id === producto.id);

    if (productoYaEnCarrito == undefined) {
      this.products.push(producto);
    } else {
      productoYaEnCarrito.cantidad++;
    }
  }

  quitaProducto(producto: Producto): void {
    let productoYaEnCarrito: Producto | undefined = this.products.find(p => p.id === producto.id);

    if (productoYaEnCarrito == undefined) {
      return;
    }

    productoYaEnCarrito.cantidad = (productoYaEnCarrito.cantidad - 1);

    if (productoYaEnCarrito.cantidad <= 0) {
      this.eliminaProductoDeListado(producto);
    }
  }

  private eliminaProductoDeListado(producto: Producto) {
    let index: number = this.products.findIndex(item => item.id === producto.id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  calculaPrecioTotal(): number {
    let precioTotal: number = 0;
    this.products.forEach( p => {
      precioTotal += p.precio * p.cantidad;
    });
    return precioTotal;
  }

  realizaCompra() {
    
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return "";
    }
  }
}