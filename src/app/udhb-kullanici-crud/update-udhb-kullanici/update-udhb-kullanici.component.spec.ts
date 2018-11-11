import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUdhbKullaniciComponent } from './update-udhb-kullanici.component';

describe('UpdateUdhbKullaniciComponent', () => {
  let component: UpdateUdhbKullaniciComponent;
  let fixture: ComponentFixture<UpdateUdhbKullaniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUdhbKullaniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUdhbKullaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
