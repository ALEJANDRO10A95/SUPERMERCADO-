import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewProductosComponent } from './dataview-productos.component';

describe('DataviewProductosComponent', () => {
  let component: DataviewProductosComponent;
  let fixture: ComponentFixture<DataviewProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataviewProductosComponent]
    });
    fixture = TestBed.createComponent(DataviewProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
