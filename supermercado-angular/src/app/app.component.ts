import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { LoadingService } from './services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent{
  title = 'Supermercado Angular';
  // loadingService: any;

  constructor(private translate: TranslateService,private loadingService: LoadingService) {
    this.translate.addLangs(["AL","EN","ES","FR","IT"]);
    this.translate.setDefaultLang('ES');
    this.translate.use('ES');
  }

  mostrarCargaYAbrirDialogCarrito() {
    // Activa el spinner durante 3 segundos
    this.loadingService.mostrarCarga(3);

    // Simula la apertura del componente dialog-carrito después de 3 segundos
    setTimeout(() => {
      // Abre el componente dialog-carrito
      // Puedes agregar aquí la lógica para abrir el dialog-carrito
    }, 3000);
  }
}
