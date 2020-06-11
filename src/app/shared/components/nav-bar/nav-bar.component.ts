import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  idManga: number;
  mangaRoute = '/manga/';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getRandomManga();
  }

  // gets a random manga from the API
  getRandomManga(){
    this.httpService.getRandomManga().subscribe(manga => {
    this.idManga = manga.idManga;
    });
  }

}
