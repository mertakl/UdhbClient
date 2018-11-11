import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonelComponent } from './add-personel.component';

describe('AddPersonelComponent', () => {
  let component: AddPersonelComponent;
  let fixture: ComponentFixture<AddPersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
