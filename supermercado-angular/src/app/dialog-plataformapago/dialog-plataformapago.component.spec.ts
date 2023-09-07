import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlataformapagoComponent } from './dialog-plataformapago.component';

describe('DialogPlataformapagoComponent', () => {
  let component: DialogPlataformapagoComponent;
  let fixture: ComponentFixture<DialogPlataformapagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPlataformapagoComponent]
    });
    fixture = TestBed.createComponent(DialogPlataformapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
