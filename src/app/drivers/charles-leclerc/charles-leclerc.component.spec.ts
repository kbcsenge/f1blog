import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlesLeclercComponent } from './charles-leclerc.component';

describe('CharlesLeclercComponent', () => {
  let component: CharlesLeclercComponent;
  let fixture: ComponentFixture<CharlesLeclercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharlesLeclercComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharlesLeclercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
