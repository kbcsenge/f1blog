import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernandoAlonsoComponent } from './fernando-alonso.component';

describe('FernandoAlonsoComponent', () => {
  let component: FernandoAlonsoComponent;
  let fixture: ComponentFixture<FernandoAlonsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FernandoAlonsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FernandoAlonsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
