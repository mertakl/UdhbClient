import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {Country, Grup, Sefer} from '../../_models';
import {GrupService, SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {PlaceService} from '../../_services/place.service';

@Component({
  selector: 'app-add-grup',
  templateUrl: './add-grup.component.html',
  styleUrls: ['./add-grup.component.css']
})
export class AddGrupComponent implements OnInit {

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
    this.grupService.addGrup(this.data);
  }

}
