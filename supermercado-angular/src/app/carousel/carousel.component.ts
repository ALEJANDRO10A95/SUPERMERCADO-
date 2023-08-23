import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  productos: Producto[] = [];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private productService: ProductService) {
    this.productService.getAllProductos()
      .then(data => {
        this.productos = data;
      });
  }

  agregaAcarritoCompra(producto: Producto) {
    //TODO
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
        return '';
    }
  }
}

