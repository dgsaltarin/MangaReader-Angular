import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MangaComponent } from './pages/manga/manga.component';
import { MangaDescriptionComponent } from './components/manga-description/manga-description.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { PageControlsComponent } from './components/page-controls/page-controls.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MangaComponent,
    MangaDescriptionComponent,
    ChapterPageComponent,
    PageContainerComponent,
    ChapterComponent,
    PageControlsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
