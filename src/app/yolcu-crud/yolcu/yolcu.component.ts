import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {YolcuService} from '../../_services';
import {Sefer, Yolcu} from '../../_models';
import {AddSeferComponent} from '../../sefer-crud/add-sefer/add-sefer.component';
import {UpdateSeferComponent} from '../../sefer-crud/update-sefer/update-sefer.component';
import {IptalSeferComponent} from '../../sefer-crud/iptal-sefer/iptal-sefer.component';
import {UpdateYolcuComponent} from '../update-yolcu/update-yolcu.component';
import {AddYolcuComponent} from '../add-yolcu/add-yolcu.component';
import {DeleteYolcuComponent} from '../delete-yolcu/delete-yolcu.component';

@Component({
  selector: 'app-yolcu',
  templateUrl: './yolcu.component.html',
  styleUrls: ['./yolcu.component.css']
})
export class YolcuComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['uetdsYolcuRefNo', 'uyrukUlke', 'cinsiyet', 'tcKimlikPasaportNo',
    'adi', 'soyadi', 'koltukNo', 'telefonNo', 'durum', 'actions'];

  constructor(private yolcuService: YolcuService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllYolcu();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllYolcu() {
    this.yolcuService.getAllYolcu().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addYolcu(yolcu: Yolcu) {
    const dialogRef = this.dialog.open(AddYolcuComponent, {
      data: {yolcu: yolcu}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  updateYolcu(id: number, uetdsYolcuRefNo: number, uyrukUlke: string, cinsiyet: string, tcKimlikPasaportNo: string,
              adi: string, soyadi: string, koltukNo: string, telefonNo: string) {
    const dialogRef = this.dialog.open(UpdateYolcuComponent, {
      data: {
        id: id,
        uetdsYolcuRefNo: uetdsYolcuRefNo,
        uyrukUlke: uyrukUlke,
        cinsiyet: cinsiyet,
        tcKimlikPasaportNo: tcKimlikPasaportNo,
        adi: adi,
        soyadi: soyadi,
        koltukNo: koltukNo,
        telefonNo: telefonNo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  deleteYolcu(id: number, uetdsYolcuRefNo: number) {
    const dialogRef = this.dialog.open(DeleteYolcuComponent, {
      data: {
        id: id,
        uetdsYolcuRefNo: uetdsYolcuRefNo
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
