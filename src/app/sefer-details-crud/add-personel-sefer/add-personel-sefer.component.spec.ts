import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AddPersonelSeferComponent} from './add-personel-sefer.component';



describe('AddPersonelUdhbComponent', () => {
  let component: AddPersonelSeferComponent;
  let fixture: ComponentFixture<AddPersonelSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonelSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonelSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
