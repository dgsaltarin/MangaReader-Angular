import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.css']
})
export class ChapterPageComponent implements OnInit {

  page: Page;
  @Input() totalPages: number;
  actualPage: number;
  nextPage: number;
  mangaId: number;
  chapterNumber: number;
  nextPageRoute: string;

  constructor(private router: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const idmanga = params.id;
      const chapterNumber = params.chapterNumber;
      let pageNumber = params.pageNumber;
      const nextPageNumber = ++pageNumber;
      this.actualPage = params.pageNumber;
      this.nextPage = pageNumber + 1;

      this.http.getChapterPage(chapterNumber, pageNumber, idmanga).subscribe(page => {
        this.page = page;
      });

      this.nextPageRoute = `/manga/${idmanga}/${chapterNumber}/${nextPageNumber}`;

    });
  }
}
