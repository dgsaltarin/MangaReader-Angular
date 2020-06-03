import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga.model';
import { HttpService } from '../../services/http.service';
import { Preview } from 'src/app/models/preview.model';

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
