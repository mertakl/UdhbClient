import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonelUdhbComponent } from './add-personel-udhb.component';

describe('AddPersonelUdhbComponent', () => {
  let component: AddPersonelUdhbComponent;
  let fixture: ComponentFixture<AddPersonelUdhbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonelUdhbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonelUdhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
