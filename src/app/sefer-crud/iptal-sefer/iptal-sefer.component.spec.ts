import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptalSeferComponent } from './iptal-sefer.component';

describe('IptalSeferComponent', () => {
  let component: IptalSeferComponent;
  let fixture: ComponentFixture<IptalSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptalSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptalSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
