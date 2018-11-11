import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {PersonelService} from '../../_services';
import {Personel, User} from '../../_models';
import {AddUserComponent} from '../../user-crud/add-user/add-user.component';
import {UpdateUserComponent} from '../../user-crud/update-user/update-user.component';
import {DeleteUserComponent} from '../../user-crud/delete-user/delete-user.component';
import {AddPersonelComponent} from '../add-personel/add-personel.component';
import {UpdatePersonelComponent} from '../update-personel/update-personel.component';
import {DeletePersonelComponent} from '../delete-personel/delete-personel.component';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['turKodu', 'uyrukUlke', 'tcKimlikPasaportNo', 'cinsiyet', 'adi', 'soyadi', 'telefon', 'adres', 'actions'];

  constructor(private personelService: PersonelService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllPersonel();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllPersonel() {
    this.personelService.getAllPersonel().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addPersonel(personel: Personel) {
    const dialogRef = this.dialog.open(AddPersonelComponent, {
      data: {personel: personel}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  updatePersonel() {
    const dialogRef = this.dialog.open(UpdatePersonelComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  deletePersonel() {
    const dialogRef = this.dialog.open(DeletePersonelComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
