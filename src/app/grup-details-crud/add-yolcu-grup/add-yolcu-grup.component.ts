import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Yolcu} from '../../_models';
import {PlaceService, YolcuService} from '../../_services';
import {UtilService} from '../../_utils';
import {Cinsiyet} from '../../_enums';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-yolcu-grup',
  templateUrl: './add-yolcu-grup.component.html',
  styleUrls: ['./add-yolcu-grup.component.css']
})
export class AddYolcuGrupComponent implements OnInit {

  constructor(public addYolcuRef: MatDialogRef<AddYolcuGrupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public yolcuService: YolcuService,
              public service: UtilService) {

  }

  yolcular;
  genders = this.service.enumSelector(Cinsiyet);

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllYolcu();
  }

  loadAllYolcu() {
    this.yolcuService.getAllYolcuWithoutGrupId().pipe(first()).subscribe(results => {
      this.yolcular = results;
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
    this.yolcuService.addYolcuGrup(this.data.grupId, this.data.yolcu.id);
  }

}
