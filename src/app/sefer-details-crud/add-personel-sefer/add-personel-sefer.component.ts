import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel} from '../../_models';
import {PersonelService, PlaceService} from '../../_services';
import {UtilService} from '../../_utils';
import {Cinsiyet} from '../../_enums';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-personel-sefer',
  templateUrl: './add-personel-sefer.component.html',
  styleUrls: ['./add-personel-sefer.component.css']
})
export class AddPersonelSeferComponent implements OnInit {

  constructor(public addPersonelRef: MatDialogRef<AddPersonelSeferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public personelService: PersonelService,
              public placeService: PlaceService,
              public service: UtilService) {

  }

  personels;
  submit: any;

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllPersonelWithoutSeferIds(this.data.seferId);
  }

  loadAllPersonelWithoutSeferIds(seferId: number) {
    this.personelService.getAllPersonelWithoutSeferId(seferId).pipe(first()).subscribe(results => {
      this.personels = results;
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
    this.personelService.addPersonelSefer(this.data.personel, this.data.seferId);
  }

}
