import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonelService} from '../../_services';

@Component({
  selector: 'app-iptal-personel-udhb',
  templateUrl: './iptal-personel-udhb.component.html',
  styleUrls: ['./iptal-personel-udhb.component.css']
})
export class IptalPersonelUdhbComponent implements OnInit {

  constructor(public personelRef: MatDialogRef<IptalPersonelUdhbComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public personelService: PersonelService) {
  }

  onNoClick(): void {
    this.personelRef.close();
  }

  confirmDelete(): void {
    this.personelService.deletePersonel(this.data.id);
  }

  ngOnInit() {
  }

}
