import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistFilterDemoComponent } from './picklist-filter-demo.component';

describe('PicklistFilterDemoComponent', () => {
  let component: PicklistFilterDemoComponent;
  let fixture: ComponentFixture<PicklistFilterDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicklistFilterDemoComponent]
    });
    fixture = TestBed.createComponent(PicklistFilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
