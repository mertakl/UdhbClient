import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptalBagajComponent } from './iptal-bagaj.component';

describe('IptalBagajComponent', () => {
  let component: IptalBagajComponent;
  let fixture: ComponentFixture<IptalBagajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptalBagajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptalBagajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
