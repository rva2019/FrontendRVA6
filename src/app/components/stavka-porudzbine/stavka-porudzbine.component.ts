import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Dobavljac } from '../../models/dobavljac';
import { Porudzbina } from '../../models/porudzbina';
import { Artikl } from '../../models/artikl';
import { StavkaPorudzbine } from '../../models/stavka-porudzbine';
import { StavkaPorudzbineService } from '../../services/stavka-porudzbine.service';

@Component({
 selector: 'app-stavka-porudzbine',
 templateUrl: './stavka-porudzbine.component.html',
 styleUrls: ['./stavka-porudzbine.component.css']
})
export class StavkaPorudzbineComponent implements OnInit {
 displayedColumns = ['id', 'redniBroj', 'kolicina', 'jedinicaMere', 'cena', 'porudzbina', 'artikl', 'actions'];
 dataSource: Observable<StavkaPorudzbine[]>;

 @Input() selektovanaPorudzbina: Porudzbina;

 constructor(public stavkaPorudzbineService: StavkaPorudzbineService, public dialog: MatDialog) { }

 ngOnInit() {

 }

 ngOnChanges() {
   if (this.selektovanaPorudzbina.id) {
     this.loadData();
   }
 }

 public loadData() {
   this.dataSource = this.stavkaPorudzbineService.getStavkeZaPorudzbinu(this.selektovanaPorudzbina.id);
 }
}