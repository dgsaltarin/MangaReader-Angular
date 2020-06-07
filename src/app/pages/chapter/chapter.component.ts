import { Component, OnInit } from '@angular/core';
import { Preview } from '../../shared/models/preview.model';
import { Manga } from '../../shared/models/manga.model';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Chapter } from '../../shared/models/chapter.model';
import { SharedService } from 'src/app/services/shared.service';

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
  totalPagesNumber: number;

  constructor(private router: ActivatedRoute, private http: HttpService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
      const idChapter = params.idChapter;
      let totlaPages: number;

      this.http.getMangaById(id).subscribe(manga => {
        this.manga = manga;
      });

      this.http.getChapterById(idChapter, id).subscribe(chapter => {
        this.pageRoute = `/manga/${id}/${chapter.chapterNumber}/`;
        this.sharedService.newTotalPagesNUmber(chapter.pages);
      });

      this.http.getChaperPreviews(id).subscribe(previews => {
        this.previews = previews;
        this.totalPagesNumber = previews.length;
        totlaPages = previews.length;
      });

    });
  }
}
