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
import { DialogBusquedaComponent } from './dialog-busqueda/dialog-busqueda.component';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DataViewModule } from 'primeng/dataview';
import { DataviewProductosComponent } from './dataview-productos/dataview-productos.component';
import { DialogCarritoComponent } from './dialog-carrito/dialog-carrito.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component'
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { ToggleButtonThemeComponent } from './toggle-button-theme/toggle-button-theme.component';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { DesplegableidiomasComponent } from './desplegableidiomas/desplegableidiomas.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CargaComponent } from './carga/carga.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DialogBusquedaComponent,
    DialogClienteComponent,
    ToolbarComponent,
    DataviewProductosComponent,
    DialogCarritoComponent,
    CarritoCompraComponent,
    DetallesProductoComponent,
    ToggleButtonThemeComponent,
    DesplegableidiomasComponent,
    LoginpageComponent,
    CargaComponent
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
    BadgeModule,
    MenuModule,
    DropdownModule,
    ListboxModule,
    ToggleButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
