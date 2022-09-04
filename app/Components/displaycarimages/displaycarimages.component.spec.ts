import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycarimagesComponent } from './displaycarimages.component';

describe('DisplaycarimagesComponent', () => {
  let component: DisplaycarimagesComponent;
  let fixture: ComponentFixture<DisplaycarimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycarimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycarimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
