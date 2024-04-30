import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValtteriBottasComponent } from './valtteri-bottas.component';

describe('ValtteriBottasComponent', () => {
  let component: ValtteriBottasComponent;
  let fixture: ComponentFixture<ValtteriBottasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValtteriBottasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValtteriBottasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
