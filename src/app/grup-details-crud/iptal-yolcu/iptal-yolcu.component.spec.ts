import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptalYolcuComponent } from './iptal-yolcu.component';

describe('IptalYolcuComponent', () => {
  let component: IptalYolcuComponent;
  let fixture: ComponentFixture<IptalYolcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptalYolcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptalYolcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
