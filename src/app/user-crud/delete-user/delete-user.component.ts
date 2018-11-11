import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../_services';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(public userRef: MatDialogRef<DeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) {
  }

  onNoClick(): void {
    this.userRef.close();
  }

  confirmDelete(): void {
    this.userService.deleteUser(this.data.id);
  }

  ngOnInit() {
  }

}
