import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonelService, SeferService} from '../../_services';

@Component({
  selector: 'app-delete-personel',
  templateUrl: './delete-personel.component.html',
  styleUrls: ['./delete-personel.component.css']
})
export class DeletePersonelComponent implements OnInit {

  constructor(public personelRef: MatDialogRef<DeletePersonelComponent>,
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
