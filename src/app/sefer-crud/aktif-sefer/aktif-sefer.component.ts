import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-aktif-sefer',
  templateUrl: './aktif-sefer.component.html',
  styleUrls: ['./aktif-sefer.component.css']
})
export class AktifSeferComponent implements OnInit {

  submit: any;

  constructor(public seferRef: MatDialogRef<AktifSeferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public seferService: SeferService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  onNoClick(): void {
    this.seferRef.close();
  }

  confirmActive(): void {
    this.seferService.aktifSefer(this.data);
  }

  ngOnInit() {
  }

}
