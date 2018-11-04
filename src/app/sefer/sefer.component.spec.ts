import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeferComponent } from './sefer.component';

describe('SeferComponent', () => {
  let component: SeferComponent;
  let fixture: ComponentFixture<SeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
