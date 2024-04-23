import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeothersComponent } from './seeothers.component';

describe('SeeothersComponent', () => {
  let component: SeeothersComponent;
  let fixture: ComponentFixture<SeeothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeothersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
