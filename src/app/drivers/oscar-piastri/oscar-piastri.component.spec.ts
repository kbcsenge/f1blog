import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarPiastriComponent } from './oscar-piastri.component';

describe('OscarPiastriComponent', () => {
  let component: OscarPiastriComponent;
  let fixture: ComponentFixture<OscarPiastriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OscarPiastriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OscarPiastriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
