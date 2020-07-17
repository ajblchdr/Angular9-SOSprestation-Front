import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceOfferClientComponent } from './list-service-offer-client.component';

describe('ListServiceOfferClientComponent', () => {
  let component: ListServiceOfferClientComponent;
  let fixture: ComponentFixture<ListServiceOfferClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceOfferClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceOfferClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
