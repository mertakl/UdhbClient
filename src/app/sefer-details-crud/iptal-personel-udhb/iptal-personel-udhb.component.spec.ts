import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptalPersonelUdhbComponent } from './iptal-personel-udhb.component';

describe('IptalPersonelUdhbComponent', () => {
  let component: IptalPersonelUdhbComponent;
  let fixture: ComponentFixture<IptalPersonelUdhbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptalPersonelUdhbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptalPersonelUdhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
