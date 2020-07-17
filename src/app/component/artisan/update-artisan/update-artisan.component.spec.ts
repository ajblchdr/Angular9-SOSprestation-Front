import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtisanComponent } from './update-artisan.component';

describe('UpdateArtisanComponent', () => {
  let component: UpdateArtisanComponent;
  let fixture: ComponentFixture<UpdateArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
