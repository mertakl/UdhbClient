import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeferDetailsComponent } from './sefer-details.component';

describe('SeferDetailsComponent', () => {
  let component: SeferDetailsComponent;
  let fixture: ComponentFixture<SeferDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeferDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
