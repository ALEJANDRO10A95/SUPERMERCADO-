import { Component } from '@angular/core';
import { Cliente } from 'src/clases/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'supermercado-angular';
  searchValue: string = '';
}

