import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonelService} from '../../_services';

@Component({
  selector: 'app-iptal-personel-sefer',
  templateUrl: './iptal-personel-sefer.component.html',
  styleUrls: ['./iptal-personel-sefer.component.css']
})
export class IptalPersonelSeferComponent implements OnInit {

  constructor(public personelRef: MatDialogRef<IptalPersonelSeferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public personelService: PersonelService) {
  }

  onNoClick(): void {
    this.personelRef.close();
  }

  confirmDelete(): void {
    this.personelService.iptalPersonel(this.data.id, this.data.iptalAciklama);
  }

  ngOnInit() {
  }

}
