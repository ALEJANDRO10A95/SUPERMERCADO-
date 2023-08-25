import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';
import { Location } from "@angular/common";
import { CarritoCompraService } from '../services/carrito-compra.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent {
  product: Producto | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService, private carritoCompraService: CarritoCompraService) {
  }

  ngOnInit() {
    try {
      let idParam: number = Number(this.route.snapshot.params['id']);
      
      if (idParam != null) {
        this.productService.getProductoById(idParam)
          .then(product => this.product = product)
      }
    } catch (error) {
    }
  };

  agregaAcarritoCompra(producto: Producto) {
    this.carritoCompraService.emiteProducto(producto);
  }

  routingBack() {
    this.location.back();
  }
}
