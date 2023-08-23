import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';
import { CarritoCompraService } from '../services/carrito-compra.service';

@Component({
  selector: 'app-dataview-productos',
  templateUrl: './dataview-productos.component.html',
  styleUrls: ['./dataview-productos.component.css'],
})
export class DataviewProductosComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductService, private carritoCompraService: CarritoCompraService) {
    this.productoService.getAllProductos()
      .then((productos: Producto[]) => {
        this.productos = productos;
      });
  }

  agregaEnCarritoCompraService(producto: Producto) {
    this.carritoCompraService.emiteProducto(producto);
  }

  getSeverity(producto: Producto) {
    switch (true) {
      case producto.cantidad > 100:
        return 'success';
      case producto.cantidad > 50:
        return 'warning';
      case producto.cantidad > 10:
        return 'danger';
      default:
        return null;
    }
  };
}
