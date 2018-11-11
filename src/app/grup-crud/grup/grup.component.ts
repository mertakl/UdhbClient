import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {GrupService} from '../../_services';
import {City, Country, District, Grup, User} from '../../_models';
import {AddUserComponent} from '../../user-crud/add-user/add-user.component';
import {UpdateUserComponent} from '../../user-crud/update-user/update-user.component';
import {DeleteUserComponent} from '../../user-crud/delete-user/delete-user.component';
import {AddGrupComponent} from '../add-grup/add-grup.component';
import {UpdateGrupComponent} from '../update-grup/update-grup.component';
import {DeleteGrupComponent} from '../delete-grup/delete-grup.component';

@Component({
  selector: 'app-grup',
  templateUrl: './grup.component.html',
  styleUrls: ['./grup.component.css']
})
export class GrupComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'uetdsGrupRefNo', 'grupAdi', 'grupAciklama', 'baslangicUlke',
    'baslangicIl', 'baslangicIlce', 'baslangicYer', 'bitisUlke', 'bitisIl', 'bitisIlce', 'bitisYer', 'actions'];

  constructor(private grupService: GrupService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllGrup();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllGrup() {
    this.grupService.getAllGrup().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addGrup(grup: Grup) {
    const dialogRef = this.dialog.open(AddGrupComponent, {
      data: {grup: grup}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  updateGrup(id: number, uetdsSeferReferansNo: number, uetdsGrupRefNo: number, grupAdi: string, grupAciklama: string,
             baslangicUlke: string, baslangicIl: string, baslangicIlce: string, baslangicYer: string, bitisUlke: string,
             bitisIl: string, bitisIlce: string, bitisYer: string) {
    const dialogRef = this.dialog.open(UpdateGrupComponent, {
      data: {
        id: id,
        uetdsSeferReferansNo: uetdsSeferReferansNo,
        uetdsGrupRefNo: uetdsGrupRefNo,
        grupAdi: grupAdi,
        grupAciklama: grupAciklama,
        baslangicUlke: baslangicUlke,
        baslangicIl: baslangicIl,
        baslangicIlce: baslangicIlce,
        baslangicYer: baslangicYer,
        bitisUlke: bitisUlke,
        bitisIl: bitisIl,
        bitisIlce: bitisIlce,
        bitisYer: bitisYer
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  deleteGrup() {
    const dialogRef = this.dialog.open(DeleteGrupComponent, {
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
