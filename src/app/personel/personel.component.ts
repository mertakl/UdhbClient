import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PersonelService} from '../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  constructor(private personelService: PersonelService) {
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

}
