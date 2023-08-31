import { Component } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-toggle-button-theme',
  templateUrl: './toggle-button-theme.component.html',
  styleUrls: ['./toggle-button-theme.component.css']
})
export class ToggleButtonThemeComponent {

  private linkElement: HTMLLinkElement;

  constructor() {
    this.linkElement = document.createElement('link');
    this.linkElement.rel = 'stylesheet';
    this.linkElement.type = 'text/css';
  }

  checked: boolean = false;

  async toggle (event : any){
    this.checked = !this.checked;
    // console.log(event.target.checked);

    if(this.checked === true){
      this.linkElement.href = '../../assets/styles/light-theme.css';

    }else if(this.checked === false){
      this.linkElement.href = '';

    }

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(this.linkElement);
  }


}
