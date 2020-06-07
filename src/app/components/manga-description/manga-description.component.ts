import { Component, OnInit, Input } from '@angular/core';
import { Manga } from '../../shared/models/manga.model';

@Component({
  selector: 'app-manga-description',
  templateUrl: './manga-description.component.html',
  styleUrls: ['./manga-description.component.css']
})
export class MangaDescriptionComponent implements OnInit {

  @Input() manga: Manga;

  constructor() { }

  ngOnInit(): void {
  }

}
