import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel, Sefer} from '../../_models';
import {PersonelService, SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-personel',
  templateUrl: './add-personel.component.html',
  styleUrls: ['./add-personel.component.css']
})
export class AddPersonelComponent implements OnInit {

  constructor(public addPersonelRef: MatDialogRef<AddPersonelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Personel,
              public personelService: PersonelService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.addPersonelRef.close();
  }

  public confirmAdd(): void {
    this.personelService.addPersonel(this.data);
  }

}
