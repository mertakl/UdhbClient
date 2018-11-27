import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagajDetailsComponent } from './bagaj-details.component';

describe('BagajDetailsComponent', () => {
  let component: BagajDetailsComponent;
  let fixture: ComponentFixture<BagajDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagajDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagajDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
