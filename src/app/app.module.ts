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
import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule} from '@angular/material';



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
    HomeComponent
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
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
