import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  idManga: number;
  mangaRoute = '/manga/';
  mangaNames: string[] = [];
  searchText: string;

  constructor(private httpService: HttpService) { }

  // gets an initial random manga when the navbar is created
  ngOnInit(): void {
    this.getRandomManga();
    // get all manga's names from all previews
    this.httpService.getAllMangasPreview().subscribe(data => {
      data.forEach(manga => {
        this.mangaNames.push(manga.name);
      });
    });
  }

  // gets a random manga from the API
  getRandomManga(){
    this.httpService.getRandomManga().subscribe(manga => {
    this.idManga = manga.idManga;
    });
  }

}

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
