import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/stavka-porudzbine/stavka-porudzbine.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HelpComponent } from './components/core/help/help.component';

const routes: Routes = [
  {path: 'artikl', component: ArtiklComponent},
  {path: 'dobavljac', component: DobavljacComponent},
  {path: 'porudzbina', component: PorudzbinaComponent},
  {path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent},
  {path: 'home', component: HomeComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
