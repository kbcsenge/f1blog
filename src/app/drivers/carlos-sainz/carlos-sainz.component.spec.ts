import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlosSainzComponent } from './carlos-sainz.component';

describe('CarlosSainzComponent', () => {
  let component: CarlosSainzComponent;
  let fixture: ComponentFixture<CarlosSainzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarlosSainzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarlosSainzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
