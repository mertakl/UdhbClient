import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonelComponent } from './delete-personel.component';

describe('DeletePersonelComponent', () => {
  let component: DeletePersonelComponent;
  let fixture: ComponentFixture<DeletePersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
