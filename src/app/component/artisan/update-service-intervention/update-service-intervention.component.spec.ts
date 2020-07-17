import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceInterventionComponent } from './update-service-intervention.component';

describe('UpdateServiceInterventionComponent', () => {
  let component: UpdateServiceInterventionComponent;
  let fixture: ComponentFixture<UpdateServiceInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
