import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-sefer',
  templateUrl: './iptal-sefer.component.html',
  styleUrls: ['./iptal-sefer.component.css']
})
export class IptalSeferComponent implements OnInit {

  constructor(public seferRef: MatDialogRef<IptalSeferComponent>,
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

  confirmDelete(): void {
    this.seferService.iptalSefer(this.data);
  }

  ngOnInit() {
  }

}
