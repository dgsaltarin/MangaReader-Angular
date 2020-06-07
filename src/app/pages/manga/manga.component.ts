import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Manga } from '../../core/models/manga.model';
import { Preview } from '../../core/models/preview.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  manga: Manga;
  previews: Preview[];
  chapterRoute: string;
  totalPages: number;
  directoryTitle = 'CAPITULOS';

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;

      this.http.getMangaById(id).subscribe(manga => {
        this.manga = manga;
      });

      this.http.getAllChaptersPreview(id).subscribe(previews => {
        this.previews = previews;
        this.totalPages = previews.length;
      });

      this.chapterRoute = `/manga/${id}/`;
    });

  }

}
