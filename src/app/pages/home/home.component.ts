import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mangas: Manga[];

  constructor(private mangaService: HttpService) { }

  ngOnInit(): void {
    this.mangaService.getAllMangas().subscribe(mangas => {
      this.mangas = mangas;
    });
  }

}
