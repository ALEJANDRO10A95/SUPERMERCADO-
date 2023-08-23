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
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { PickListModule } from 'primeng/picklist';
import { DialogModule } from 'primeng/dialog';
import { PicklistFilterDemoComponent } from './picklist-filter-demo/picklist-filter-demo.component';
import { DialogBusquedaComponent } from './dialog-busqueda/dialog-busqueda.component';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DataViewModule } from 'primeng/dataview';
import { DataviewProductosComponent } from './dataview-productos/dataview-productos.component';
import { DialogCarritoComponent } from './dialog-carrito/dialog-carrito.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PicklistFilterDemoComponent,
    DialogBusquedaComponent,
    DialogClienteComponent,
    ToolbarComponent,
    DataviewProductosComponent,
    DialogCarritoComponent,
    CarritoCompraComponent
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
    DataViewModule,
    BadgeModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
