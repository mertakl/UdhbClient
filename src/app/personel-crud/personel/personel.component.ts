import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {first} from 'rxjs/operators';
import {PersonelService} from '../../_services';
import {Personel, User} from '../../_models';
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
    const dialogRef = this.dialog.open(AddPersonelComponent, {
      data: {personel: personel}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllPersonel();
    });
  }

  updatePersonel(id: number, uyrukUlke: string, tcKimlikPasaportNo: string, adi: string,
                 soyadi: string, cinsiyet: string, telefon: string, adres: string) {
    const dialogRef = this.dialog.open(UpdatePersonelComponent, {
      data: {
        id: id,
        uyrukUlke: uyrukUlke,
        tcKimlikPasaportNo: tcKimlikPasaportNo,
        adi: adi,
        soyadi: soyadi,
        cinsiyet: cinsiyet,
        telefon: telefon,
        adres: adres
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllPersonel();
    });
  }

  deletePersonel(id: number, adi: string, soyadi: string) {
    const dialogRef = this.dialog.open(DeletePersonelComponent, {
      data: {
        id: id,
        adi: adi,
        soyadi: soyadi
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllPersonel();
    });
  }
}
