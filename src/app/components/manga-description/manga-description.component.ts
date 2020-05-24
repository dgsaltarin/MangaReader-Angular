import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-description',
  templateUrl: './manga-description.component.html',
  styleUrls: ['./manga-description.component.css']
})
export class MangaDescriptionComponent implements OnInit {

  title = 'Kuroshisuji';
  constructor() { }

  ngOnInit(): void {
  }

}
