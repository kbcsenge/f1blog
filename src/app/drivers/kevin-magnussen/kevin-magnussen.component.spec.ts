import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinMagnussenComponent } from './kevin-magnussen.component';

describe('KevinMagnussenComponent', () => {
  let component: KevinMagnussenComponent;
  let fixture: ComponentFixture<KevinMagnussenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KevinMagnussenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KevinMagnussenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
