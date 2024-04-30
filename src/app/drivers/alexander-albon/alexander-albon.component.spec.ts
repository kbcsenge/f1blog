import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexanderAlbonComponent } from './alexander-albon.component';

describe('AlexanderAlbonComponent', () => {
  let component: AlexanderAlbonComponent;
  let fixture: ComponentFixture<AlexanderAlbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlexanderAlbonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlexanderAlbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
