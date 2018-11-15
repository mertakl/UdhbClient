import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel} from '../../_models';
import {PersonelService, PlaceService} from '../../_services';
import {UtilService} from '../../_utils';
import {Cinsiyet} from '../../_enums';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-personel-udhb',
  templateUrl: './add-personel-udhb.component.html',
  styleUrls: ['./add-personel-udhb.component.css']
})
export class AddPersonelUdhbComponent implements OnInit {

  constructor(public addPersonelRef: MatDialogRef<AddPersonelUdhbComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Personel,
              public personelService: PersonelService,
              public placeService: PlaceService,
              public service: UtilService) {

  }

  countries;
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
