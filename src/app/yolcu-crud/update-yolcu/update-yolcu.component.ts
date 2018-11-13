import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddGrupComponent} from '../../grup-crud/add-grup/add-grup.component';
import {Grup, Yolcu} from '../../_models';
import {GrupService, PlaceService, SeferService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AddYolcuComponent} from '../add-yolcu/add-yolcu.component';
import {Cinsiyet} from '../../_enums';

@Component({
  selector: 'app-update-yolcu',
  templateUrl: './update-yolcu.component.html',
  styleUrls: ['./update-yolcu.component.css']
})
export class UpdateYolcuComponent implements OnInit {

  countries;
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

  enumSelector(definition) {
    return Object.keys(definition)
      .map(key => ({value: definition[key], title: key}));
  }

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
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.addYolcuRef.close();
  }

  public confirmAdd(): void {
    this.yolcuService.updateYolcu(this.data);
  }

}
