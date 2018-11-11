import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYolcuComponent } from './add-yolcu.component';

describe('AddYolcuComponent', () => {
  let component: AddYolcuComponent;
  let fixture: ComponentFixture<AddYolcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYolcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYolcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
