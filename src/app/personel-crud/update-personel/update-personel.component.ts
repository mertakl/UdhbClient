import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Personel, Sefer} from '../../_models';
import {PersonelService, SeferService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-personel',
  templateUrl: './update-personel.component.html',
  styleUrls: ['./update-personel.component.css']
})
export class UpdatePersonelComponent implements OnInit {

  constructor(public personelRef: MatDialogRef<UpdatePersonelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Personel, public personelService: PersonelService) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  onNoClick(): void {
    this.personelRef.close();
  }

  stopEdit(): void {
    this.personelService.updatePersonel(this.data);
  }

  ngOnInit() {
  }
}
