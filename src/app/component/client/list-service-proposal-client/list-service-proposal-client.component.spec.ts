import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceProposalClientComponent } from './list-service-proposal-client.component';

describe('ListServiceProposalClientComponent', () => {
  let component: ListServiceProposalClientComponent;
  let fixture: ComponentFixture<ListServiceProposalClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceProposalClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceProposalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
