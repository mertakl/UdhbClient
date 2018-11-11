import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrupComponent } from './update-grup.component';

describe('UpdateGrupComponent', () => {
  let component: UpdateGrupComponent;
  let fixture: ComponentFixture<UpdateGrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
