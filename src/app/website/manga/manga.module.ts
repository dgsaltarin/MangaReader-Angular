import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaRoutingModule } from './manga-routing.module';
import { MangaComponent } from './components/manga/manga.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ MangaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MangaRoutingModule
  ]
})
export class MangaModule { }
