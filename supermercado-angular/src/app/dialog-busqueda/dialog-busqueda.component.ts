import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dialog-busqueda',
  templateUrl: './dialog-busqueda.component.html',
  styleUrls: ['./dialog-busqueda.component.css']
})
export class DialogBusquedaComponent {
  esVisible: boolean = false;
  resultadoBusqueda: Producto[] = [];
  productoSeleccionado?: Producto;

  constructor(private productService: ProductService, private router: Router) {
  }

  buscarProducto(input: string) {
    //No se realizan busquedas con una sola letra
    if(input.length < 2) {
      this.resultadoBusqueda = [];
      return;
    }
    
    this.productService.getProductosByNombre(input)
      .then(data => this.resultadoBusqueda = data);
  }

  redireccionaDetalleProducto(id: number) {
    this.router.navigate(['/producto/'+id]);
  }

  showDialog() {
    this.esVisible = true;
  }

  closeDialog() {
    setTimeout(() => {
      this.esVisible = false;
    }, 100);
  }
}
