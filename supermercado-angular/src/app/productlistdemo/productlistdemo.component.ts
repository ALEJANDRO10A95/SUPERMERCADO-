import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productlistdemo',
  templateUrl: './productlistdemo.component.html',
  styleUrls: ['./productlistdemo.component.css']
})

export class ProductlistdemoComponent {
  products: Producto[] | any[] = [];
  productoSeleccionado: Producto | null = null;
  productosFiltrados: Producto[] = [];
  sugerenciasProductos: Producto[] = [];
  terminoBusqueda: string = '';
  constructor(private productService: ProductService, /* public ref: DynamicDialogRef */) {}

  ngOnInit() {
     this.products = this.productService.getProducts();
  }



  agregaProducto(producto: Producto): void {
    const productoYaEnCarrito: Producto | undefined = this.products.find(p => p.id === producto.id);

    if (productoYaEnCarrito === undefined) {
      this.products.push(producto);
    } else {
      productoYaEnCarrito.cantidad++;
    }
  }

  quitaProducto(producto: Producto): void {
    this.products = this.products.map(p => {
      if (p.id === producto.id) {
        return { ...p, cantidad: Math.max(p.cantidad - 1, 0) };
      }
      return p;
    }).filter(p => p.cantidad > 0);
  }


  buscarProductos(): void {
    const filtro = this.terminoBusqueda.toLowerCase().trim();
    const productosFiltrados = this.products.filter(
      producto =>
        producto.nombre.toLowerCase().includes(filtro) ||
        producto.descripcion.toLowerCase().includes(filtro)
    );

    if (productosFiltrados.length === 1) {
      this.mostrarProductoSeleccionado(productosFiltrados[0]);
    } else {
      this.ocultarProductoSeleccionado();
    }

    this.mostrarSugerencias(productosFiltrados);
  }

  mostrarProductoSeleccionado(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  ocultarProductoSeleccionado(): void {
    this.productoSeleccionado = null;
  }

  mostrarSugerencias(sugerencias: Producto[]): void {
    this.sugerenciasProductos = sugerencias;
  }

  seleccionarProducto(producto: Producto): void {
    this.mostrarProductoSeleccionado(producto);
    this.sugerenciasProductos = [];
    this.terminoBusqueda = '';
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
 


