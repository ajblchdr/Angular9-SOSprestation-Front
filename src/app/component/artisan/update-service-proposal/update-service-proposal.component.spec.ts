import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceProposalComponent } from './update-service-proposal.component';

describe('UpdateServiceProposalComponent', () => {
  let component: UpdateServiceProposalComponent;
  let fixture: ComponentFixture<UpdateServiceProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
