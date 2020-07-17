import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArtisanComponent } from './dashboard-artisan.component';

describe('DashboardArtisanComponent', () => {
  let component: DashboardArtisanComponent;
  let fixture: ComponentFixture<DashboardArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
