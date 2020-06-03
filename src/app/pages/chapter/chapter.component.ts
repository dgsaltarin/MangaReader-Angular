import { Component, OnInit } from '@angular/core';
import { Preview } from 'src/app/models/preview.model';
import { Manga } from 'src/app/models/manga.model';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Chapter } from 'src/app/models/chapter.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  previews: Preview[];
  manga: Manga;
  pageRoute: string;
  chapter: Chapter;

  constructor(private router: ActivatedRoute, private http: HttpService ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
      const idChapter = params.idChapter;

      this.http.getMangaById(id).subscribe(manga => {
        this.manga = manga;
      });

      this.http.getChapterById(idChapter, id).subscribe(chapter => {
        this.pageRoute = `/manga/${id}/${chapter.chapterNumber}/`;
      });

      this.http.getChaperPreviews(id).subscribe(previews => {
        this.previews = previews;
      });

    });
  }
}
