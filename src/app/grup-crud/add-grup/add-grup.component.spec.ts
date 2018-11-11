import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrupComponent } from './add-grup.component';

describe('AddGrupComponent', () => {
  let component: AddGrupComponent;
  let fixture: ComponentFixture<AddGrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
