import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LewisHamiltonComponent } from './lewis-hamilton.component';

describe('LewisHamiltonComponent', () => {
  let component: LewisHamiltonComponent;
  let fixture: ComponentFixture<LewisHamiltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LewisHamiltonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LewisHamiltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
