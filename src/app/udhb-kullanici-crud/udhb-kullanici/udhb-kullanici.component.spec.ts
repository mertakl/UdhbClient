import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdhbKullaniciComponent } from './udhb-kullanici.component';

describe('UdhbKullaniciComponent', () => {
  let component: UdhbKullaniciComponent;
  let fixture: ComponentFixture<UdhbKullaniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdhbKullaniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdhbKullaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
