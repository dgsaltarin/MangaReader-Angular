import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { Page } from '../../../../core/models/page.model';
import { SharedService } from 'src/app/core/services/shared.service';

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
  key: string;

  constructor(private router: ActivatedRoute, private http: HttpService,
              private sharedService: SharedService, private routerPage: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const idmanga = params.id;
      const chapterNumber = params.chapterNumber;
      let pageNumber = params.pageNumber;
      const nextPageNumber = ++pageNumber;
      const previusPageNumber = --pageNumber - 1;
      this.actualPage = params.pageNumber;
      this.nextPage = pageNumber + 1;

      this.sharedService.sharedTotalPagesNumber.subscribe(pages => this.totalPages = pages);

      this.http.getChapterPage(chapterNumber, pageNumber, idmanga).subscribe(page => {
        this.page = page;
      });

      this.nextPageRoute = `/manga/${idmanga}/${chapterNumber}/${nextPageNumber}`;
      this.lastPageRoute = `/manga/${idmanga}/${chapterNumber}/${this.totalPages}`;
      this.previusPageRoute = `/manga/${idmanga}/${chapterNumber}/${previusPageNumber}`;
      this.firstPageRoute = `/manga/${idmanga}/${chapterNumber}/1`;

    });
  }


  // detects a pressed key and change the page in function of the key
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.key = event.key;
    console.log(this.key);
    if (this.key === 'ArrowRight' && this.actualPage < this.totalPages){
      this.nextPageFunction();
    }
    if (this.key === 'ArrowLeft' && this.actualPage > 1){
      this.previusPageFunction();
    }
  }

  nextPageFunction(){
    this.routerPage.navigate([this.nextPageRoute], { relativeTo: this.router });
  }

  previusPageFunction(){
    this.routerPage.navigate([this.previusPageRoute], { relativeTo: this.router });
  }
}
