import {Component, Inject, OnInit} from '@angular/core';
import {Cinsiyet} from '../../_enums';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Yolcu} from '../../_models';
import {GrupService, PlaceService, YolcuService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-send-yolcu-udhb',
  templateUrl: './send-yolcu-udhb.component.html',
  styleUrls: ['./send-yolcu-udhb.component.css']
})
export class SendYolcuUdhbComponent implements OnInit {

  groups;

  constructor(public addYolcuRef: MatDialogRef<SendYolcuUdhbComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Yolcu,
              public yolcuService: YolcuService,
              public grupService: GrupService) {

  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loadAllGrup();
  }


  loadAllGrup() {
    this.grupService.getAllGrup().pipe(first()).subscribe(results => {
      this.groups = results;
    });
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.addYolcuRef.close();
  }

  public confirmSend(): void {
    this.yolcuService.sendYolcuToUdhb(this.data.id, this.data.grup.id);
  }

}
