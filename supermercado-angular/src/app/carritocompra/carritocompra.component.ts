import { Component } from '@angular/core';
import { Producto } from 'src/clases/producto';

@Component({
  selector: 'app-carritocompra',
  templateUrl: './carritocompra.component.html',
  styleUrls: ['./carritocompra.component.css']
})
export class CarritocompraComponent {
  private productos: Producto[] = [];

  agregaProducto(producto: Producto): void {
    let productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.id === producto.id) as Producto | undefined;

    if(productoYaEnCarrito == undefined) {
      this.productos.push(producto);
      return;
  }

  productoYaEnCarrito.cantidad =(productoYaEnCarrito.cantidad+1);
}

quitaProducto(producto: Producto): void {
  this.productos = this.productos.map(p => {
    if (p.id === producto.id) {
      return { ...p, cantidad: Math.max(p.cantidad - 1, 0) };
    }
    return p;
  }).filter(p => p.cantidad > 0);

 /*  let productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.id === producto.id);

  if(productoYaEnCarrito == undefined) {
      return;
  }

  if(productoYaEnCarrito.cantidad>0) {
  productoYaEnCarrito.cantidad =(productoYaEnCarrito.cantidad-1);
  }

  if(productoYaEnCarrito.cantidad==0) {
    const index = this.productos.indexOf(productoYaEnCarrito);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  } */


}

getProductos(): Producto[]{
  return this.productos;
}

show (): void {

}
}
