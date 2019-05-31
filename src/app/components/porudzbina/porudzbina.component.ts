import { Component, OnInit } from '@angular/core';
import { PorudzbinaService } from '../../services/porudzbina.service';
import { MatDialog } from '@angular/material';
import { Porudzbina } from '../../models/porudzbina';
import { Observable } from 'rxjs';
import { Dobavljac } from '../../models/dobavljac';
import { PorudzbinaDialogComponent } from '../dialogs/porudzbina-dialog/porudzbina-dialog.component';

@Component({
 selector: 'app-porudzbina',
 templateUrl: './porudzbina.component.html',
 styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {
 displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];
 dataSource: Observable<Porudzbina[]>;
 selektovanaPorudzbina: Porudzbina;

 constructor(public porudzbinaService: PorudzbinaService, public dialog: MatDialog) { }

 ngOnInit() {
   this.loadData();
 }

 public loadData() {
   this.dataSource = this.porudzbinaService.getAllPorudzbina();
 }

 public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, placeno: boolean, iznos: number, dobavljac: Dobavljac ) {
   const dialogRef = this.dialog.open(PorudzbinaDialogComponent, { data: { id: id, datum: datum, isporuceno: isporuceno, placeno: placeno, iznos: iznos, dobavljac: dobavljac  } });
   dialogRef.componentInstance.flag = flag;
   console.log("objekat? "+dobavljac);

   dialogRef.afterClosed().subscribe(result => {
     if (result == 1)
       this.loadData();
   });
 }

 selectRow(row){
  this.selektovanaPorudzbina = row;
 }
}