import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDinamycBusquedadComponent } from './dialog-dinamyc-busquedad.component';

describe('DialogDinamycBusquedadComponent', () => {
  let component: DialogDinamycBusquedadComponent;
  let fixture: ComponentFixture<DialogDinamycBusquedadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDinamycBusquedadComponent]
    });
    fixture = TestBed.createComponent(DialogDinamycBusquedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
