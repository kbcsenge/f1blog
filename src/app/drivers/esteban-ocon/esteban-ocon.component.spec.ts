import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstebanOconComponent } from './esteban-ocon.component';

describe('EstebanOconComponent', () => {
  let component: EstebanOconComponent;
  let fixture: ComponentFixture<EstebanOconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstebanOconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstebanOconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
