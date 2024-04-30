import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierreGaslyComponent } from './pierre-gasly.component';

describe('PierreGaslyComponent', () => {
  let component: PierreGaslyComponent;
  let fixture: ComponentFixture<PierreGaslyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PierreGaslyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PierreGaslyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
