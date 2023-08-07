import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritocompraComponent } from './carritocompra.component';

describe('CarritocompraComponent', () => {
  let component: CarritocompraComponent;
  let fixture: ComponentFixture<CarritocompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritocompraComponent]
    });
    fixture = TestBed.createComponent(CarritocompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
