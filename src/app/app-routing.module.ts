import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaComponent } from './pages/manga/manga.component';
import { HomeComponent } from './pages/home/home.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';



const routes: Routes = [
  {
    path: 'random', component: MangaComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'manga/:id', component: MangaComponent
  },
  {
    path: 'manga/:id/:idChapter', component: ChapterComponent
  },
  {
    path: 'manga/:id/:chapterNumber/:pageNumber', component: ChapterPageComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
