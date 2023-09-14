import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-toggle-button-theme',
  templateUrl: './toggle-button-theme.component.html',
  styleUrls: ['./toggle-button-theme.component.css']
})
export class ToggleButtonThemeComponent {

  private linkElement: HTMLLinkElement;

  constructor(private cookies : CookieService) {
    this.linkElement = document.createElement('link');
    this.linkElement.rel = 'stylesheet';
    this.linkElement.type = 'text/css';

  }

  ngOnInit(){
    let theme = this.cookies.get("theme")
    console.log(theme)
    if(theme == "light"){
      this.linkElement.href = '../../assets/styles/light-theme.css';
      const head = document.getElementsByTagName('head')[0];
    head.appendChild(this.linkElement);
    this.checked = true;
    }
  }

  checked: boolean = false;

  async toggle (event : any){
    this.checked = !this.checked;
    // console.log(event.target.checked);

    if(this.checked === true){
      this.linkElement.href = '../../assets/styles/light-theme.css';
      this.cookies.set("theme", "light")

    }else if(this.checked === false){
      this.linkElement.href = '';
      this.cookies.set("theme", "dark")
    }

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(this.linkElement);
  }


}
