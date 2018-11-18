import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Sefer, Yolcu} from '../../_models';
import {GrupService, PlaceService, SeferService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Cinsiyet} from '../../_enums';
import {UtilService} from '../../_utils';

@Component({
  selector: 'app-add-yolcu',
  templateUrl: './add-yolcu.component.html',
  styleUrls: ['./add-yolcu.component.css']
})
export class AddYolcuComponent implements OnInit {

  constructor(public addYolcuRef: MatDialogRef<AddYolcuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Yolcu,
              public yolcuService: YolcuService,
              public placeService: PlaceService,
              public service: UtilService) {

  }

  countries;
  submit: any;
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
    this.addYolcuRef.close();
  }

  public confirmAdd(): void {
    this.yolcuService.addYolcu(this.data);
  }
}
