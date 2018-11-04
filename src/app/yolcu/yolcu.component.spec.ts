import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YolcuComponent } from './yolcu.component';

describe('YolcuComponent', () => {
  let component: YolcuComponent;
  let fixture: ComponentFixture<YolcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YolcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
