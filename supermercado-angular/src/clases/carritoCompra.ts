import { Producto } from './producto.js';

export class CarritoCompra{
    private productos: Producto[] = [];

    agregaProducto(producto: Producto): void {
        let productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.getId() === producto.getId());

        if(productoYaEnCarrito == undefined) {
            this.productos.push(producto);
            return;
        }
        
        productoYaEnCarrito.setCantidad(productoYaEnCarrito.getCantidad()+1);
    }

    quitaProducto(producto: Producto): void {
        let productoYaEnCarrito: Producto | undefined = this.productos.find(p => p.getId() === producto.getId());

        if(productoYaEnCarrito == undefined) {
            return;
        }
        
        productoYaEnCarrito.setCantidad(productoYaEnCarrito.getCantidad()+1);
    }

    getProductos(): Producto[]{
        return this.productos;
    }
}