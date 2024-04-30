import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoganSargeantComponent } from './logan-sargeant.component';

describe('LoganSargeantComponent', () => {
  let component: LoganSargeantComponent;
  let fixture: ComponentFixture<LoganSargeantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoganSargeantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoganSargeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
