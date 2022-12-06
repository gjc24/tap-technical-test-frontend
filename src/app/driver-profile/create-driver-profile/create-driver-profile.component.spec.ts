import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDriverProfileComponent } from './create-driver-profile.component';

describe('CreateDriverProfileComponent', () => {
  let component: CreateDriverProfileComponent;
  let fixture: ComponentFixture<CreateDriverProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDriverProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDriverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
