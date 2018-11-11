import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Sefer, Yolcu} from '../../_models';
import {GrupService, PlaceService, SeferService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Cinsiyet} from '../../_enums';

@Component({
  selector: 'app-add-yolcu',
  templateUrl: './add-yolcu.component.html',
  styleUrls: ['./add-yolcu.component.css']
})
export class AddYolcuComponent implements OnInit {
  countries;
  groups;
  genders = this.enumSelector(Cinsiyet);

  constructor(public addYolcuRef: MatDialogRef<AddYolcuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Yolcu,
              public yolcuService: YolcuService,
              public placeService: PlaceService,
              public grupService: GrupService) {

  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllCountries();
    this.loadAllGrup();
  }

  enumSelector(definition) {
    return Object.keys(definition)
      .map(key => ({value: definition[key], title: key}));
  }

  loadAllCountries() {
    this.placeService.getAllCountries().pipe(first()).subscribe(results => {
      this.countries = results;
    });
  }

  loadAllGrup() {
    this.grupService.getAllGrup().pipe(first()).subscribe(results => {
      this.groups = results;
    });
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.addYolcuRef.close();
  }

  public confirmAdd(): void {
    this.yolcuService.addYolcu(this.data);
  }
}
