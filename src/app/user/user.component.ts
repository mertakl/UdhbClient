import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../_services';
import {first} from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['first_name', 'last_name', 'username', 'email', 'roles'];

  constructor(private userService: UserService) {
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
}
