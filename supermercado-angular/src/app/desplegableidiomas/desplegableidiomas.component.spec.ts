import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegableidiomasComponent } from './desplegableidiomas.component';

describe('DesplegableidiomasComponent', () => {
  let component: DesplegableidiomasComponent;
  let fixture: ComponentFixture<DesplegableidiomasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesplegableidiomasComponent]
    });
    fixture = TestBed.createComponent(DesplegableidiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
