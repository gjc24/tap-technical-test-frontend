import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedFareComponent } from './calculated-fare.component';

describe('CalculatedFareComponent', () => {
  let component: CalculatedFareComponent;
  let fixture: ComponentFixture<CalculatedFareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedFareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
