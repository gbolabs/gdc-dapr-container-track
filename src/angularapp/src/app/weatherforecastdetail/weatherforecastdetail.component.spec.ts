import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherforecastdetailComponent } from './weatherforecastdetail.component';

describe('WeatherforecastdetailComponent', () => {
  let component: WeatherforecastdetailComponent;
  let fixture: ComponentFixture<WeatherforecastdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherforecastdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherforecastdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
