import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primer/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer/automobil/automobil.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/stavka-porudzbine/stavka-porudzbine.component';
import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component'
import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './services/artikl.service';
import { ArtiklDialogComponent } from './components/dialogs/artikl-dialog/artikl-dialog.component';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './components/dialogs/dobavljac-dialog/dobavljac-dialog.component';
import { DobavljacService } from './services/dobavljac.service';
import { PorudzbinaDialogComponent } from './components/dialogs/porudzbina-dialog/porudzbina-dialog.component';
import { PorudzbinaService } from './services/porudzbina.service';
import { StavkaPorudzbineService } from './services/stavka-porudzbine.service';



@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    HelpComponent,
    AuthorComponent,
    HomeComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule

  ],
  entryComponents:[ArtiklDialogComponent, DobavljacDialogComponent, PorudzbinaDialogComponent],
  providers: [ArtiklService, DobavljacService, PorudzbinaService, StavkaPorudzbineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
