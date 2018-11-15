import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBagajComponent } from './delete-bagaj.component';

describe('DeleteBagajComponent', () => {
  let component: DeleteBagajComponent;
  let fixture: ComponentFixture<DeleteBagajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBagajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBagajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
