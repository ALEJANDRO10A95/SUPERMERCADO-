import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from 'src/interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {
  private producto: Subject<Producto> = new Subject<Producto>();
  public producto$: Observable<Producto> = this.producto.asObservable();
  
  public emiteProducto(producto : Producto): void {
      this.producto.next(producto);
  }
}
