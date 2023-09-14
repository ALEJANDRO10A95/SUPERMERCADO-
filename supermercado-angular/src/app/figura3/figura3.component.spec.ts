import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figura3Component } from './figura3.component';

describe('Figura3Component', () => {
  let component: Figura3Component;
  let fixture: ComponentFixture<Figura3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Figura3Component]
    });
    fixture = TestBed.createComponent(Figura3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
