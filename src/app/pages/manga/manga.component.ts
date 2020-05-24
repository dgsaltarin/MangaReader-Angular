import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  chapters = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
