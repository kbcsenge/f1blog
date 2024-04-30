import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxVerstappenComponent } from './max-verstappen.component';

describe('MaxVerstappenComponent', () => {
  let component: MaxVerstappenComponent;
  let fixture: ComponentFixture<MaxVerstappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxVerstappenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxVerstappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
