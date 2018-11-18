import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel, Sefer, Yolcu} from '../../_models';
import {GrupService, PersonelService, PlaceService, SeferService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {Cinsiyet, PersonelTuru} from '../../_enums';
import {first} from 'rxjs/operators';
import {UtilService} from '../../_utils';

@Component({
  selector: 'app-add-personel',
  templateUrl: './add-personel.component.html',
  styleUrls: ['./add-personel.component.css']
})
export class AddPersonelComponent implements OnInit {

  constructor(public addPersonelRef: MatDialogRef<AddPersonelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Personel,
              public personelService: PersonelService,
              public placeService: PlaceService,
              public service: UtilService) {

  }

  countries;
  submit: any;
  tours = this.service.enumSelector(PersonelTuru);
  genders = this.service.enumSelector(Cinsiyet);

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.placeService.getAllCountries().pipe(first()).subscribe(results => {
      this.countries = results;
    });
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  onNoClick(): void {
    this.addPersonelRef.close();
  }

  public confirmAdd(): void {
    this.personelService.addPersonel(this.data);
  }

}
