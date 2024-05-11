import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinmenuComponent } from './loggedinmenu.component';

describe('LoggedinmenuComponent', () => {
  let component: LoggedinmenuComponent;
  let fixture: ComponentFixture<LoggedinmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedinmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedinmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
