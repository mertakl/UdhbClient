import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYolcuComponent } from './update-yolcu.component';

describe('UpdateYolcuComponent', () => {
  let component: UpdateYolcuComponent;
  let fixture: ComponentFixture<UpdateYolcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateYolcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateYolcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
