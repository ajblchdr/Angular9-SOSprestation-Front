import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceInterventionComponent } from './create-service-intervention.component';

describe('CreateServiceInterventionComponent', () => {
  let component: CreateServiceInterventionComponent;
  let fixture: ComponentFixture<CreateServiceInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
