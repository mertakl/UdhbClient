import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupComponent } from './grup.component';

describe('GrupComponent', () => {
  let component: GrupComponent;
  let fixture: ComponentFixture<GrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
