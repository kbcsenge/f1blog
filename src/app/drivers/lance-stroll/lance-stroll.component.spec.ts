import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceStrollComponent } from './lance-stroll.component';

describe('LanceStrollComponent', () => {
  let component: LanceStrollComponent;
  let fixture: ComponentFixture<LanceStrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanceStrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanceStrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
