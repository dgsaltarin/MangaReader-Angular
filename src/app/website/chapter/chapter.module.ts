import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChapterRoutingModule } from './chapter-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ ChapterComponent ],
  imports: [
    CommonModule,
    SharedModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
