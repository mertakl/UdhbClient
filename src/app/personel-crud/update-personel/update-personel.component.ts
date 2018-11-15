import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel, Sefer, Yolcu} from '../../_models';
import {PersonelService, PlaceService, SeferService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {Cinsiyet} from '../../_enums';
import {AddYolcuComponent} from '../../yolcu-crud/add-yolcu/add-yolcu.component';
import {first} from 'rxjs/operators';
import {UtilService} from '../../_utils';

@Component({
  selector: 'app-update-personel',
  templateUrl: './update-personel.component.html',
  styleUrls: ['./update-personel.component.css']
})
export class UpdatePersonelComponent implements OnInit {

  constructor(public addPersonelRef: MatDialogRef<AddYolcuComponent>,
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

  public stopEdit(): void {
    this.personelService.updatePersonel(this.data);
  }

}
