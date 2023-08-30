import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonThemeComponent } from './toggle-button-theme.component';

describe('ToggleButtonThemeComponent', () => {
  let component: ToggleButtonThemeComponent;
  let fixture: ComponentFixture<ToggleButtonThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleButtonThemeComponent]
    });
    fixture = TestBed.createComponent(ToggleButtonThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
