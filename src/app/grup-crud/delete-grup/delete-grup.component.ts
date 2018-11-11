import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GrupService, SeferService} from '../../_services';

@Component({
  selector: 'app-delete-grup',
  templateUrl: './delete-grup.component.html',
  styleUrls: ['./delete-grup.component.css']
})
export class DeleteGrupComponent implements OnInit {

  constructor(public grupRef: MatDialogRef<DeleteGrupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public grupService: GrupService) {
  }

  onNoClick(): void {
    this.grupRef.close();
  }

  confirmDelete(): void {
    this.grupService.deleteGrup(this.data.id);
  }

  ngOnInit() {
  }

}
