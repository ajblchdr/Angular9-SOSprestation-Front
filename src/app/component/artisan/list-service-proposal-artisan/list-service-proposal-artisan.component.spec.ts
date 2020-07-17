import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceProposalArtisanComponent } from './list-service-proposal-artisan.component';

describe('ListServiceProposalArtisanComponent', () => {
  let component: ListServiceProposalArtisanComponent;
  let fixture: ComponentFixture<ListServiceProposalArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceProposalArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceProposalArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
