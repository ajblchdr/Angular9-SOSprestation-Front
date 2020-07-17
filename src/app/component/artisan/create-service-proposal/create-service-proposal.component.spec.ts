import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceProposalComponent } from './create-service-proposal.component';

describe('CreateServiceProposalComponent', () => {
  let component: CreateServiceProposalComponent;
  let fixture: ComponentFixture<CreateServiceProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
