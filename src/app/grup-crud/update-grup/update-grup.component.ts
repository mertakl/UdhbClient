import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GrupService, PlaceService, SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {AddGrupComponent} from '../add-grup/add-grup.component';
import {first} from 'rxjs/operators';
import {Grup} from '../../_models';

@Component({
  selector: 'app-update-grup',
  templateUrl: './update-grup.component.html',
  styleUrls: ['./update-grup.component.css']
})
export class UpdateGrupComponent implements OnInit {

  countries;
  cities;
  districts;
  travels;

  constructor(public addGrupRef: MatDialogRef<AddGrupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Grup,
              public grupService: GrupService,
              public placeService: PlaceService,
              public seferService: SeferService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllCountries();
    this.loadAllSefer();
  }

  loadAllCountries() {
    this.placeService.getAllCountries().pipe(first()).subscribe(results => {
      this.countries = results;
    });
  }

  loadAllCities(id: any) {
    this.placeService.getAllCities(id).pipe(first()).subscribe(results => {
      this.cities = results;
    });
  }

  loadAllDistricts(id: any) {
    this.placeService.getAlDistricts(id).pipe(first()).subscribe(results => {
      this.districts = results;
    });
  }

  loadAllSefer() {
    this.seferService.getAllSefer().pipe(first()).subscribe(results => {
      this.travels = results;
    });
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.addGrupRef.close();
  }

  public confirmAdd(): void {
    this.grupService.updateGrup(this.data);
  }

}
