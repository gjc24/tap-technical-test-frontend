import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriverProfileComponent } from './list-driver-profile.component';

describe('ListDriverProfileComponent', () => {
  let component: ListDriverProfileComponent;
  let fixture: ComponentFixture<ListDriverProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDriverProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDriverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
