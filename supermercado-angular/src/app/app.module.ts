import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CarritocompraComponent } from './carritocompra/carritocompra.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogComponent } from './dialog/dialog.component';
import { ProductlistdemoComponent } from './productlistdemo/productlistdemo.component';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { PickListModule } from 'primeng/picklist';
import { DialogModule } from 'primeng/dialog';
import { DialogDinamycBusquedadComponent } from './dialog-dinamyc-busquedad/dialog-dinamyc-busquedad.component';
import { PicklistFilterDemoComponent } from './picklist-filter-demo/picklist-filter-demo.component';
import { DialogBusquedaComponent } from './dialog-busqueda/dialog-busqueda.component';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarritocompraComponent,
    DialogComponent,
    ProductlistdemoComponent,
    DialogDinamycBusquedadComponent,
    PicklistFilterDemoComponent,
    DialogBusquedaComponent,
    DialogClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    CarouselModule,
    CascadeSelectModule,
    DynamicDialogModule,
    TableModule,
    PickListModule,
    DialogModule,
    BadgeModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
