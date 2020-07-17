import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceOfferComponent } from './create-service-offer.component';

describe('CreateServiceOfferComponent', () => {
  let component: CreateServiceOfferComponent;
  let fixture: ComponentFixture<CreateServiceOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
