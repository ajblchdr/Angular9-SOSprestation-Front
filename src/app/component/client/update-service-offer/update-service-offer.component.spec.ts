import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceOfferComponent } from './update-service-offer.component';

describe('UpdateServiceOfferComponent', () => {
  let component: UpdateServiceOfferComponent;
  let fixture: ComponentFixture<UpdateServiceOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
