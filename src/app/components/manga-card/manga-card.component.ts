import { Component, OnInit, Input } from '@angular/core';
import { Manga } from 'src/app/models/manga.model';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.css']
})
export class MangaCardComponent implements OnInit {

  constructor() { }

  @Input() manga: Manga;

  ngOnInit(): void {
  }

}
