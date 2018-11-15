import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PersonelService} from '../../_services/index';
import {Personel} from '../../_models';
import {first} from 'rxjs/operators';
import {AddPersonelUdhbComponent} from '../add-personel-udhb/add-personel-udhb.component';
import {IptalPersonelUdhbComponent} from '../iptal-personel-udhb/iptal-personel-udhb.component';

@Component({
  selector: 'app-sefer-details',
  templateUrl: './sefer-details.component.html',
  styleUrls: ['./sefer-details.component.css']
})
export class SeferDetailsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'turKodu', 'uyrukUlke', 'tcKimlikPasaportNo',
    'cinsiyet', 'adi', 'soyadi', 'telefon', 'adres', 'actions'];

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
    const dialogRef = this.dialog.open(AddPersonelUdhbComponent, {
      data: {personel: personel}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  iptalPersonel(id: number, adi: string, soyadi: string) {
    const dialogRef = this.dialog.open(IptalPersonelUdhbComponent, {
      data: {
        id: id,
        adi: adi,
        soyadi: soyadi
      }
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
