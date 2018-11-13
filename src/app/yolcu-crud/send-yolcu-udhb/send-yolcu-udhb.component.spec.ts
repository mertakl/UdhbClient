import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendYolcuUdhbComponent } from './send-yolcu-udhb.component';

describe('SendYolcuUdhbComponent', () => {
  let component: SendYolcuUdhbComponent;
  let fixture: ComponentFixture<SendYolcuUdhbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendYolcuUdhbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendYolcuUdhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
