import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Sefer, UdhbKullanici} from '../../_models';
import {SeferService, UdhbKullaniciService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-udhb-kullanici',
  templateUrl: './update-udhb-kullanici.component.html',
  styleUrls: ['./update-udhb-kullanici.component.css']
})
export class UpdateUdhbKullaniciComponent implements OnInit {

  submit: any;
  constructor(public udhbKullaniciRef: MatDialogRef<UpdateUdhbKullaniciComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UdhbKullanici, public udhbKullaniciService: UdhbKullaniciService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  onNoClick(): void {
    this.udhbKullaniciRef.close();
  }

  stopEdit(): void {
    this.udhbKullaniciService.updateUdhbKullanici(this.data);
  }

  ngOnInit() {
  }
}
