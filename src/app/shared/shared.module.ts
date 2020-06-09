import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './components/directory/directory.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { PaginationSystemComponent, TimesPipe } from './components/pagination-system/pagination-system.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MangaDescriptionComponent } from './components/manga-description/manga-description.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    DirectoryComponent,
    PreviewCardComponent,
    PaginationSystemComponent,
    MangaDescriptionComponent,
    NavBarComponent,
    TimesPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    DirectoryComponent,
    MangaDescriptionComponent,
    NavBarComponent
  ]
})

export class SharedModule { }
