import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaComponent } from './components/manga/manga.component';


const routes: Routes = [
  {
    path: '', component: MangaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class MangaRoutingModule { }
