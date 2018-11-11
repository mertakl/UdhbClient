import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Sefer} from '../../_models';
import {SeferService} from '../../_services';

@Component({
  selector: 'app-add-sefer',
  templateUrl: './add-sefer.component.html',
  styleUrls: ['./add-sefer.component.css']
})
export class AddSeferComponent implements OnInit {

  constructor(public addSeferRef: MatDialogRef<AddSeferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Sefer,
              public seferService: SeferService) {
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
    this.seferService.addSefer(this.data);
  }
}
