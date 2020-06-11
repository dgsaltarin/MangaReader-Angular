import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'manga/:id',
    loadChildren: () => import('./manga/manga.module').then(m => m.MangaModule)
  },
  {
    path: 'manga/:id/:idChapter',
    loadChildren: () => import('./chapter/chapter.module').then(m => m.ChapterModule)
  },
  {
    path: 'manga/:id/:chapterNumber/:pageNumber',
    loadChildren: () => import('./chapter-page/chapter-page.module').then(m => m.ChapterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule { }
