import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanyuZhouComponent } from './guanyu-zhou.component';

describe('GuanyuZhouComponent', () => {
  let component: GuanyuZhouComponent;
  let fixture: ComponentFixture<GuanyuZhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuanyuZhouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuanyuZhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
