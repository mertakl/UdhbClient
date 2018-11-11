import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGrupComponent } from './delete-grup.component';

describe('DeleteGrupComponent', () => {
  let component: DeleteGrupComponent;
  let fixture: ComponentFixture<DeleteGrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
