import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IptalPersonelSeferComponent} from './iptal-personel-sefer.component';



describe('IptalPersonelSeferComponent', () => {
  let component: IptalPersonelSeferComponent;
  let fixture: ComponentFixture<IptalPersonelSeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptalPersonelSeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptalPersonelSeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
