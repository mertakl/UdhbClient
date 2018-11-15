import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {YolcuService} from '../../_services';

@Component({
  selector: 'app-iptal-yolcu',
  templateUrl: './iptal-yolcu.component.html',
  styleUrls: ['./iptal-yolcu.component.css']
})
export class IptalYolcuComponent implements OnInit {

  constructor(public yolcuRef: MatDialogRef<IptalYolcuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public yolcuService: YolcuService) {
  }

  onNoClick(): void {
    this.yolcuRef.close();
  }

  confirmDelete(): void {
    this.yolcuService.iptalYolcu(this.data.id, this.data.iptalAciklama);
  }

  ngOnInit() {
  }

}
