import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktifSeferComponent } from './aktif-sefer.component';

describe('AktifSeferComponent', () => {
  let component: AktifSeferComponent;
  let fixture: ComponentFixture<AktifSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktifSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktifSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
