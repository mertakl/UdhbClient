import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeferComponent } from './add-sefer.component';

describe('AddSeferComponent', () => {
  let component: AddSeferComponent;
  let fixture: ComponentFixture<AddSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
