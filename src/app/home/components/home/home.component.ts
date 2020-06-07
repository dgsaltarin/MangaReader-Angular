import { Component, OnInit } from '@angular/core';
import { Manga } from '../../../shared/models/manga.model';
import { HttpService } from '../../../core/services/http.service';
import { Preview } from '../../../shared/models/preview.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mangas: Manga[];
  directoryTitle = 'DIRECTORIO DE MANGAS';
  previews: Preview[];
  mangaRoute = '/manga/';

  constructor(private mangaService: HttpService) { }

  ngOnInit(): void {
    this.mangaService.getAllMangasPreview().subscribe(preview => {
      this.previews = preview;
    });

  }

}
