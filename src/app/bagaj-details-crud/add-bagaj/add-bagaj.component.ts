import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bagaj',
  templateUrl: './add-bagaj.component.html',
  styleUrls: ['./add-bagaj.component.css']
})
export class AddBagajComponent implements OnInit {

  submit: any;

  constructor(public addSeferRef: MatDialogRef<AddBagajComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public yolcuService: YolcuService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('date') ? 'Not a valid date' :
        '';
  }

  onNoClick(): void {
    this.addSeferRef.close();
  }

  public confirmAdd(): void {
    this.yolcuService.addBagaj(this.data.yolcuId, this.data.bagaj);
  }

}
