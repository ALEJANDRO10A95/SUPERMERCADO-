import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Languages {
  name: string;
  code: string;
}

@Component({
  selector: 'app-desplegableidiomas',
  templateUrl: './desplegableidiomas.component.html',
  styleUrls: ['./desplegableidiomas.component.css']
})

export class DesplegableidiomasComponent implements OnInit {
  languages: Languages[] | undefined;
  selectedLanguages: Languages | undefined;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.languages = [
      { name: 'Inglés', code: 'EN' },
      { name: 'Español', code: 'ES' },
      { name: 'Italiano', code: 'IT' },
      { name: 'Francés', code: 'FR' },
      { name: 'Alemán', code: 'AL' }
    ];
  }

  cambiarLenguaje(language: string): void {
    this.translateService.use(language);
  }
}
