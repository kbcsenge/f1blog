import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicoHulkenbergComponent } from './nico-hulkenberg.component';

describe('NicoHulkenbergComponent', () => {
  let component: NicoHulkenbergComponent;
  let fixture: ComponentFixture<NicoHulkenbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NicoHulkenbergComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NicoHulkenbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
