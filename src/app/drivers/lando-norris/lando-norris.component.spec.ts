import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandoNorrisComponent } from './lando-norris.component';

describe('LandoNorrisComponent', () => {
  let component: LandoNorrisComponent;
  let fixture: ComponentFixture<LandoNorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandoNorrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandoNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
