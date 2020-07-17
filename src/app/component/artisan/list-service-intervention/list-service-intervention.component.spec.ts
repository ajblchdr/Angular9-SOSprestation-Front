import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceInterventionComponent } from './list-service-intervention.component';

describe('ListServiceInterventionComponent', () => {
  let component: ListServiceInterventionComponent;
  let fixture: ComponentFixture<ListServiceInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
