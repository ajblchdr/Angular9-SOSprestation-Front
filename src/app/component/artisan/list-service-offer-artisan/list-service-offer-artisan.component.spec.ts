import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceOfferArtisanComponent } from './list-service-offer-artisan.component';

describe('ListServiceOfferArtisanComponent', () => {
  let component: ListServiceOfferArtisanComponent;
  let fixture: ComponentFixture<ListServiceOfferArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceOfferArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceOfferArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
