import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {UdhbKullaniciService} from '../../_services';
import {UpdateUdhbKullaniciComponent} from '../update-udhb-kullanici/update-udhb-kullanici.component';


@Component({
  selector: 'app-udhb-kullanici',
  templateUrl: './udhb-kullanici.component.html',
  styleUrls: ['./udhb-kullanici.component.css']
})
export class UdhbKullaniciComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['id', 'kullaniciAdi', 'sifre', 'actions'];

  constructor(private udhbKullaniciService: UdhbKullaniciService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllKullanici();
  }

  private loadAllKullanici() {
    this.udhbKullaniciService.getAllKullanici().pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
    });
  }

  updateUdhbKullanici() {
    const dialogRef = this.dialog.open(UpdateUdhbKullaniciComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllKullanici();
    });
  }
}
