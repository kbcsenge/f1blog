import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedoutmenuComponent } from './loggedoutmenu.component';

describe('LoggedoutmenuComponent', () => {
  let component: LoggedoutmenuComponent;
  let fixture: ComponentFixture<LoggedoutmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedoutmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedoutmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
