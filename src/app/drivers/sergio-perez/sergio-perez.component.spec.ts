import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SergioPerezComponent } from './sergio-perez.component';

describe('SergioPerezComponent', () => {
  let component: SergioPerezComponent;
  let fixture: ComponentFixture<SergioPerezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SergioPerezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SergioPerezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
