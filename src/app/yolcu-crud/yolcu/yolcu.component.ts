import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {YolcuService} from '../../_services';
import {Country, Sefer, Yolcu} from '../../_models';
import {AddSeferComponent} from '../../sefer-crud/add-sefer/add-sefer.component';
import {UpdateSeferComponent} from '../../sefer-crud/update-sefer/update-sefer.component';
import {IptalSeferComponent} from '../../sefer-crud/iptal-sefer/iptal-sefer.component';
import {UpdateYolcuComponent} from '../update-yolcu/update-yolcu.component';
import {AddYolcuComponent} from '../add-yolcu/add-yolcu.component';
import {DeleteYolcuComponent} from '../delete-yolcu/delete-yolcu.component';
import {SendYolcuUdhbComponent} from '../send-yolcu-udhb/send-yolcu-udhb.component';

@Component({
  selector: 'app-yolcu',
  templateUrl: './yolcu.component.html',
  styleUrls: ['./yolcu.component.css']
})
export class YolcuComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'uetdsYolcuRefNo', 'uyrukUlke', 'cinsiyet', 'tcKimlikPasaportNo',
    'adi', 'soyadi', 'koltukNo', 'telefonNo', 'durum', 'actions'];

  constructor(private yolcuService: YolcuService, public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadAllYolcu();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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
    if (uetdsYolcuRefNo == null || uetdsYolcuRefNo == undefined) {
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
    } else {
      this.openSnackBar('Bakanlığa gönderilen yolcular güncellenemez!', 'Warning');
    }
  }

  deleteYolcu(id: number, uetdsYolcuRefNo: number, adi: string, soyadi: string) {
    if (uetdsYolcuRefNo != null || uetdsYolcuRefNo != undefined) {
      const dialogRef = this.dialog.open(DeleteYolcuComponent, {
        data: {
          id: id,
          uetdsYolcuRefNo: uetdsYolcuRefNo,
          adi: adi,
          soyadi: soyadi
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.refreshTable();
        }
      });
    } else {
      this.openSnackBar('Yolcu iptal etmek için öncelikli olarak bakanlığa gönderiniz!', 'Warning');
    }
  }

  sendYolcuToUdhb(id: number, uetdsYolcuRefNo: number) {
    if (uetdsYolcuRefNo == null || uetdsYolcuRefNo == undefined) {
      const dialogRef = this.dialog.open(SendYolcuUdhbComponent, {
        data: {
          id: id
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.refreshTable();
        }
      });
    } else {
      this.openSnackBar('Yolcu bakanlığa zaten göderilmiş!', 'Warning');
    }
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
