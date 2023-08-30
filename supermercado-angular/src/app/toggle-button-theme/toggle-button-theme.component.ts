import { Component } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-toggle-button-theme',
  templateUrl: './toggle-button-theme.component.html',
  styleUrls: ['./toggle-button-theme.component.css']
})
export class ToggleButtonThemeComponent {
  checked: boolean = false;
}
