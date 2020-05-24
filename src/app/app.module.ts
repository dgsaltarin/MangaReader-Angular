import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MangaComponent } from './pages/manga/manga.component';
import { HomeComponent } from './pages/home/home.component';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { MangaDescriptionComponent } from './components/manga-description/manga-description.component';
import { PageComponent } from './components/page/page.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MangaComponent,
    HomeComponent,
    MangaCardComponent,
    MangaDescriptionComponent,
    PageComponent,
    ChapterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
