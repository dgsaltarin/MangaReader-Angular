import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './components/directory/directory.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { PaginationSystemComponent, TimesPipe } from './components/pagination-system/pagination-system.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    DirectoryComponent,
    PreviewCardComponent,
    PaginationSystemComponent,
    TimesPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    DirectoryComponent
  ]
})

export class SharedModule { }
