import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {YolcuService} from "../../_services";
import {first} from "rxjs/operators";
import {AddBagajComponent} from "../add-bagaj/add-bagaj.component";
import {IptalBagajComponent} from "../iptal-bagaj/iptal-bagaj.component";

@Component({
  selector: 'app-bagaj-details',
  templateUrl: './bagaj-details.component.html',
  styleUrls: ['./bagaj-details.component.css']
})
export class BagajDetailsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'barkodNo', 'durum', 'actions'];

  constructor(private yolcuService: YolcuService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.loadAllBagajWithYolcuId(this.data.yolcuId);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadAllBagajWithYolcuId(yolcuId: number) {
    this.yolcuService.getAllBagajWithYolcuId(yolcuId).pipe(first()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addBagajToYolcu() {
    const dialogRef = this.dialog.open(AddBagajComponent, {
      data: {yolcuId: this.data.yolcuId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllBagajWithYolcuId(this.data.yolcuId);
    });
  }


  iptalBagaj(id: number, barkodNo: number) {
    const dialogRef = this.dialog.open(IptalBagajComponent, {
      data: {
        id: id,
        barkodNo: barkodNo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllBagajWithYolcuId(this.data.yolcuId);
    });
  }

}
