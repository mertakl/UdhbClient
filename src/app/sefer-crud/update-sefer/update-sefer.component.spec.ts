import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeferComponent } from './update-sefer.component';

describe('UpdateSeferComponent', () => {
  let component: UpdateSeferComponent;
  let fixture: ComponentFixture<UpdateSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
