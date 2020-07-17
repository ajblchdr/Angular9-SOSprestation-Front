import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtisanComponent } from './create-artisan.component';

describe('CreateArtisanComponent', () => {
  let component: CreateArtisanComponent;
  let fixture: ComponentFixture<CreateArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
