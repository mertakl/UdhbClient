import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {YolcuService} from '../../_services/index';
import {IptalYolcuComponent} from '../iptal-yolcu/iptal-yolcu.component';
import {AddYolcuGrupComponent} from '../../grup-details-crud/add-yolcu-grup/add-yolcu-grup.component';
import {Personel, Yolcu} from '../../_models';
import {MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {BagajDetailsComponent} from "../../bagaj-details-crud/bagaj-details/bagaj-details.component";

@Component({
  selector: 'app-grup-details',
  templateUrl: './grup-details.component.html',
  styleUrls: ['./grup-details.component.css']
})
export class GrupDetailsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['yolcuId', 'grupId', 'uetdsYolcuRefNo', 'uyrukUlke', 'cinsiyet', 'tcKimlikPasaportNo',
    'adi', 'soyadi', 'koltukNo', 'telefonNo', 'durum', 'actions'];

  constructor(private yolcuService: YolcuService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.loadAllYolcuWithGrupId(this.data.row.id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllYolcuWithGrupId(grupId: number) {
    this.yolcuService.getAllYolcuWithGrupId(grupId).pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addYolcuToUdhb() {
    const dialogRef = this.dialog.open(AddYolcuGrupComponent, {
      data: {grupId: this.data.row.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllYolcuWithGrupId(this.data.row.id);
    });
  }


  iptalYolcu(id: number, adi: string, soyadi: string) {
    const dialogRef = this.dialog.open(IptalYolcuComponent, {
      data: {
        id: id,
        adi: adi,
        soyadi: soyadi
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllYolcuWithGrupId(this.data.row.id);
    });
  }

  yolcuBagajlari(id: number) {
    const dialogRef = this.dialog.open(BagajDetailsComponent, {
      data: {
        yolcuId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllYolcuWithGrupId(this.data.row.id);
    });
  }

}
