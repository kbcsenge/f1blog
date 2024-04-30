import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielRicciardoComponent } from './daniel-ricciardo.component';

describe('DanielRicciardoComponent', () => {
  let component: DanielRicciardoComponent;
  let fixture: ComponentFixture<DanielRicciardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanielRicciardoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanielRicciardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
