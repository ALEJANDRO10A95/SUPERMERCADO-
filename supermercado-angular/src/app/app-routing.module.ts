import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { DataviewProductosComponent } from './dataview-productos/dataview-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'productos', component: DataviewProductosComponent },
  { path: 'producto/:id', component: DetallesProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
