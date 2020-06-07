import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Page } from '../../shared/models/page.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.css']
})
export class ChapterPageComponent implements OnInit {

  page: Page;
  totalPages: number;
  actualPage: number;
  nextPage: number;
  mangaId: number;
  chapterNumber: number;
  nextPageRoute: string;
  lastPageRoute: string;
  previusPageRoute: string;
  firstPageRoute: string;

  constructor(private router: ActivatedRoute, private http: HttpService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const idmanga = params.id;
      const chapterNumber = params.chapterNumber;
      let pageNumber = params.pageNumber;
      const nextPageNumber = ++pageNumber;
      const previusPageNumber = --pageNumber - 1;
      this.actualPage = params.pageNumber;
      this.nextPage = pageNumber + 1;

      this.sharedService.sharedTotalPagesNumber.subscribe(pages => this.totalPages = pages );

      this.http.getChapterPage(chapterNumber, pageNumber, idmanga).subscribe(page => {
        this.page = page;
      });

      this.nextPageRoute = `/manga/${idmanga}/${chapterNumber}/${nextPageNumber}`;
      this.lastPageRoute = `/manga/${idmanga}/${chapterNumber}/${this.totalPages}`;
      this.previusPageRoute = `/manga/${idmanga}/${chapterNumber}/${previusPageNumber}`;
      this.firstPageRoute = `/manga/${idmanga}/${chapterNumber}/1`;

    });
  }
}
