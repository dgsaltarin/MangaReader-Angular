import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component';


const routes: Routes = [
  {
    path: '', component: ChapterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterPageRoutingModule { }
