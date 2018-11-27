import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBagajComponent } from './add-bagaj.component';

describe('AddBagajComponent', () => {
  let component: AddBagajComponent;
  let fixture: ComponentFixture<AddBagajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBagajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBagajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
