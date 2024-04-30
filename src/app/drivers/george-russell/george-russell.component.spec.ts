import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgeRussellComponent } from './george-russell.component';

describe('GeorgeRussellComponent', () => {
  let component: GeorgeRussellComponent;
  let fixture: ComponentFixture<GeorgeRussellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeorgeRussellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeorgeRussellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
