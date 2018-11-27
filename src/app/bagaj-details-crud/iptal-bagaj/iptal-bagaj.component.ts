import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-iptal-bagaj',
  templateUrl: './iptal-bagaj.component.html',
  styleUrls: ['./iptal-bagaj.component.css']
})
export class IptalBagajComponent implements OnInit {

  submit: any;

  constructor(public seferRef: MatDialogRef<IptalBagajComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public yolcuService: YolcuService) {
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

  confirmDelete(): void {
    this.yolcuService.iptalBagaj(this.data.bagajId);
  }

  ngOnInit() {
  }

}
