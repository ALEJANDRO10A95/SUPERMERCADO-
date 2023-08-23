import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { DataviewProductosComponent } from './dataview-productos/dataview-productos.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'productos', component: DataviewProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
