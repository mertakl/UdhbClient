import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../_models';
import {UserService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public addUserRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public userService: UserService) {
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
    this.addUserRef.close();
  }

  public confirmAdd(): void {
    this.userService.addUser(this.data);
  }

}
