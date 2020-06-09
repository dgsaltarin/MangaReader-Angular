import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PageControlsComponent } from './components/page-controls/page-controls.component';
import { ChapterPageRoutingModule } from './chapter-page-routing.module';



@NgModule({
  declarations: [
    ChapterPageComponent,
    PageContainerComponent,
    PageControlsComponent
  ],
  imports: [
    CommonModule,
    ChapterPageRoutingModule
  ]
})
export class ChapterPageModule { }
