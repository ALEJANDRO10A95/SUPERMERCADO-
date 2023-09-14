import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataviewProductosComponent } from './dataview-productos/dataview-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'productos', component: DataviewProductosComponent },
  { path: 'producto/:id', component: DetallesProductoComponent },
  { path: 'login',component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
