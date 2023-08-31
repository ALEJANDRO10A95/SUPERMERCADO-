import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { LoadingService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Supermercado Angular';

  constructor(private translate: TranslateService, public loadingService: LoadingService) {
    this.translate.addLangs(["AL","EN","ES","FR","IT"]);
    this.translate.setDefaultLang('ES');
    this.translate.use('ES');
  }
}
