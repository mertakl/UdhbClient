import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupDetailsComponent } from './grup-details.component';

describe('GrupDetailsComponent', () => {
  let component: GrupDetailsComponent;
  let fixture: ComponentFixture<GrupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
