import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SeferService, YolcuService} from '../../_services';

@Component({
  selector: 'app-delete-yolcu',
  templateUrl: './delete-yolcu.component.html',
  styleUrls: ['./delete-yolcu.component.css']
})
export class DeleteYolcuComponent implements OnInit {

  constructor(public yolcuRef: MatDialogRef<DeleteYolcuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public yolcuService: YolcuService) {
  }

  onNoClick(): void {
    this.yolcuRef.close();
  }

  confirmDelete(): void {
    this.yolcuService.deleteYolcu(this.data.id);
  }

  ngOnInit() {
  }
}
