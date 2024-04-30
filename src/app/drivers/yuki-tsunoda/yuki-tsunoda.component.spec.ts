import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YukiTsunodaComponent } from './yuki-tsunoda.component';

describe('YukiTsunodaComponent', () => {
  let component: YukiTsunodaComponent;
  let fixture: ComponentFixture<YukiTsunodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YukiTsunodaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YukiTsunodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
