import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Sefer} from '../../_models';
import {SeferService} from '../../_services';

@Component({
  selector: 'app-update-sefer',
  templateUrl: './update-sefer.component.html',
  styleUrls: ['./update-sefer.component.css']
})
export class UpdateSeferComponent implements OnInit {

  constructor(public seferRef: MatDialogRef<UpdateSeferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Sefer, public seferService: SeferService) { }

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

  stopEdit(): void {
    this.seferService.updateSefer(this.data);
  }

  ngOnInit() {
  }

}
