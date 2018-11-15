import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYolcuGrupComponent } from './add-yolcu-grup.component';

describe('AddYolcuGrupComponent', () => {
  let component: AddYolcuGrupComponent;
  let fixture: ComponentFixture<AddYolcuGrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYolcuGrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYolcuGrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
