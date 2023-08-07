import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBusquedaComponent } from './dialog-busqueda.component';

describe('DialogBusquedaComponent', () => {
  let component: DialogBusquedaComponent;
  let fixture: ComponentFixture<DialogBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBusquedaComponent]
    });
    fixture = TestBed.createComponent(DialogBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
