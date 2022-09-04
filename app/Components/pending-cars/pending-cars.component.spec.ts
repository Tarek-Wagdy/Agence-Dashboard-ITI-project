import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCarsComponent } from './pending-cars.component';

describe('PendingCarsComponent', () => {
  let component: PendingCarsComponent;
  let fixture: ComponentFixture<PendingCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
