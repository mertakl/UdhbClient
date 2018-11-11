import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteYolcuComponent } from './delete-yolcu.component';

describe('DeleteYolcuComponent', () => {
  let component: DeleteYolcuComponent;
  let fixture: ComponentFixture<DeleteYolcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteYolcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteYolcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
