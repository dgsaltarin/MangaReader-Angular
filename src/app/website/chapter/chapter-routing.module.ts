import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterComponent } from './components/chapter/chapter.component';


const routes: Routes = [
  {
    path: '', component: ChapterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class ChapterRoutingModule { }


