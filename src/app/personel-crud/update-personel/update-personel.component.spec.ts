import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonelComponent } from './update-personel.component';

describe('UpdatePersonelComponent', () => {
  let component: UpdatePersonelComponent;
  let fixture: ComponentFixture<UpdatePersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
