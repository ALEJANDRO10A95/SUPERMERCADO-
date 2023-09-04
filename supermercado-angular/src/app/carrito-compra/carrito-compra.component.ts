import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/interfaces/producto';
import { CarritoCompraService } from '../services/carrito-compra.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {
  productos: Producto[] = [];

  @Output() cantidadEmitter = new EventEmitter<number>(); //para comunicar a componente padre la cantidad de Productos en el Carrito
  @ViewChild('tableProductos') tableProductos: Table | undefined; //para actualizar la pagination de la Table, al añadir/quitar Productos

  constructor(private carritoCompraService: CarritoCompraService) {

  }

  ngOnInit(): void {
    this.carritoCompraService.producto$.subscribe((producto: Producto) => this.agregaProducto(producto));
  }

  agregaProducto(producto: Producto): void {
    const productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.id === producto.id);

    if (productoYaEnCarrito == undefined) {
      producto.cantidad = 1;
      this.productos.push(producto);
    } else {
      productoYaEnCarrito.cantidad++;
    }

    this.actualizaCantidadEnCarrito();
  }

  quitaProducto(producto: Producto): void {
    let productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.id === producto.id);

    if (productoYaEnCarrito == undefined) {
      return;
    }

    productoYaEnCarrito.cantidad = (productoYaEnCarrito.cantidad - 1);

    if (productoYaEnCarrito.cantidad <= 0) {
      this.eliminaProductoDeListado(producto);
    }

    this.actualizaCantidadEnCarrito();
  }

  private eliminaProductoDeListado(producto: Producto) {
    let index: number = this.productos.findIndex(item => item.id === producto.id);
    //index del Producto en el array productos. Puede ser -1 si dicho Producto no se encuentra en el array
    if (index > -1) {
      this.productos.splice(index, 1);
    }
  }

  calculaPrecioTotal(): number {
    let precioTotal: number = 0;
    this.productos.forEach( p => {
      precioTotal += p.precio * p.cantidad;
    });
    return precioTotal;
  }

  calculaCantidadTotal(): number {
    let cantidadTotal: number = 0;
    this.productos.forEach( p => {
      cantidadTotal += p.cantidad;
    });
    return cantidadTotal;
  }

  actualizaCantidadEnCarrito() {
    this.cantidadEmitter.emit(this.calculaCantidadTotal());
    this.tableProductos?.reset();
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
