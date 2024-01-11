import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownCurrencyComponent } from './drop-down-currency.component';

describe('DropDownCurrencyComponent', () => {
  let component: DropDownCurrencyComponent;
  let fixture: ComponentFixture<DropDownCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownCurrencyComponent]
    });
    fixture = TestBed.createComponent(DropDownCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
