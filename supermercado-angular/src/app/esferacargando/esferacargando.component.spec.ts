import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsferacargandoComponent } from './esferacargando.component';

describe('EsferacargandoComponent', () => {
  let component: EsferacargandoComponent;
  let fixture: ComponentFixture<EsferacargandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsferacargandoComponent]
    });
    fixture = TestBed.createComponent(EsferacargandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
