import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MangaComponent } from './pages/manga/manga.component';
import { HomeComponent } from './pages/home/home.component';
import { MangaDescriptionComponent } from './components/manga-description/manga-description.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectoryComponent } from './components/directory/directory.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { PageControlsComponent } from './components/page-controls/page-controls.component';
import { PaginationSystemComponent, TimesPipe } from './components/pagination-system/pagination-system.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MangaComponent,
    HomeComponent,
    MangaDescriptionComponent,
    ChapterPageComponent,
    DirectoryComponent,
    PageContainerComponent,
    PreviewCardComponent,
    ChapterComponent,
    PageControlsComponent,
    PaginationSystemComponent,
    TimesPipe,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
