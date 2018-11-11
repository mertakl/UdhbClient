import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {SeferService} from '../../_services';
import {Sefer} from '../../_models';
import {AddSeferComponent} from '../add-sefer/add-sefer.component';
import {UpdateSeferComponent} from '../update-sefer/update-sefer.component';
import {IptalSeferComponent} from '../iptal-sefer/iptal-sefer.component';
import {AktifSeferComponent} from '../aktif-sefer/aktif-sefer.component';

@Component({
  selector: 'app-sefer',
  templateUrl: './sefer.component.html',
  styleUrls: ['./sefer.component.css']
})
export class SeferComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'uetdsSeferReferansNo', 'aracPlaka', 'hareketTarihi', 'hareketSaati',
    'seferAciklama', 'aracTelefonu', 'firmaSeferNo', 'seferBitisTarihi', 'seferBitisSaati', 'durum', 'actions'];

  constructor(private seferService: SeferService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllSefer();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  addSefer(sefer: Sefer) {
    const dialogRef = this.dialog.open(AddSeferComponent, {
      data: {sefer: sefer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  updateSefer(id: number, uetdsSeferReferansNo: number, aracPlaka: string, hareketTarihi: string, hareketSaati: string,
              seferAciklama: string, aracTelefonu: string, firmaSeferNo: string, seferBitisTarihi: string, seferBitisSaati: string) {
    const dialogRef = this.dialog.open(UpdateSeferComponent, {
      data: {
        id: id,
        uetdsSeferReferansNo: uetdsSeferReferansNo,
        aracPlaka: aracPlaka,
        hareketTarihi: new Date(hareketTarihi),
        hareketSaati: hareketSaati,
        seferAciklama: seferAciklama,
        aracTelefonu: aracTelefonu,
        firmaSeferNo: firmaSeferNo,
        seferBitisTarihi: new Date(seferBitisTarihi),
        seferBitisSaati: seferBitisSaati
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  deleteSefer(id: number, uetdsSeferReferansNo: number) {
    const dialogRef = this.dialog.open(IptalSeferComponent, {
      data: {id: id, uetdsSeferReferansNo: uetdsSeferReferansNo}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  activeSefer(id: number, uetdsSeferReferansNo: number) {
    const dialogRef = this.dialog.open(AktifSeferComponent, {
      data: {id: id, uetdsSeferReferansNo: uetdsSeferReferansNo}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  private loadAllSefer() {
    this.seferService.getAllSefer().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
