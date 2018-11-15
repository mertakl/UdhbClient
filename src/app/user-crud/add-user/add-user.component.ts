import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../_models';
import {UserService} from '../../_services';
import {FormControl, Validators} from '@angular/forms';
import {Cinsiyet, RoleName} from '../../_enums';
import {UtilService} from '../../_utils';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public addUserRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public userService: UserService,
              public service: UtilService) {
  }

  roles = this.service.enumSelector(RoleName);

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  onNoClick(): void {
    this.addUserRef.close();
  }

  public confirmAdd(): void {
    this.userService.addUser(this.data);
  }

}
