import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../_services';
import {User, Yolcu} from '../../_models';
import {AddUserComponent} from '../add-user/add-user.component';
import {DeleteUserComponent} from '../delete-user/delete-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'username', 'email', 'actions'];

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllUsers() {
    this.userService.getAllUser().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addUser(user: User) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllUsers();
    });
  }

  deleteUser(id: number, first_name: string, last_name: string) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: {
        id: id,
        first_name: first_name,
        last_name: last_name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllUsers();
    });
  }

}
