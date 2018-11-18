import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PersonelService} from '../../_services/index';
import {Personel} from '../../_models';
import {first} from 'rxjs/operators';
import {AddPersonelSeferComponent} from '../add-personel-sefer/add-personel-sefer.component';
import {IptalPersonelSeferComponent} from '../iptal-personel-sefer/iptal-personel-sefer.component';

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

  constructor(private personelService: PersonelService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.loadAllPersonelWithSeferId(this.data.row.id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllPersonelWithSeferId(seferId: number) {
    this.personelService.getAllPersonelWithSeferId(seferId).pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addPersonel() {
    const dialogRef = this.dialog.open(AddPersonelSeferComponent, {
      data: {seferId: this.data.row.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllPersonelWithSeferId(this.data.row.id);
    });
  }

  iptalPersonel(id: number, adi: string, soyadi: string) {
    const dialogRef = this.dialog.open(IptalPersonelSeferComponent, {
      data: {
        id: id,
        adi: adi,
        soyadi: soyadi
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllPersonelWithSeferId(this.data.row.id);
    });
  }
}
