import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artikl } from '../../models/artikl';
import { ArtiklService } from '../../services/artikl.service';
import { MatDialog } from '@angular/material';
import { ArtiklDialogComponent } from '../dialogs/artikl-dialog/artikl-dialog.component';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions']
  dataSource: Observable<Artikl[]>;

  constructor(public artiklService: ArtiklService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.artiklService.getAllArtikl();
  }

  public openDialog(flag: number, id: number, naziv: string, proizvodjac: string){
    const dialogRef = this.dialog.open(ArtiklDialogComponent,
                                      {data: {id: id, naziv: naziv, proizvodjac: proizvodjac}}
    );

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        this.loadData();
      }    
    })
  }
}
