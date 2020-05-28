import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga.model';

@Component({
  selector: 'app-manga-description',
  templateUrl: './manga-description.component.html',
  styleUrls: ['./manga-description.component.css']
})
export class MangaDescriptionComponent implements OnInit {

  manga: Manga;

  title = 'Kuroshisuji';
  constructor() { }

  ngOnInit(): void {
  }

}
