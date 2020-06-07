import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit, OnChanges {

  @Input() previews: Preview[] = []; // full array of previews
  @Input() title: string; // title for the directory
  @Input() route: string; // rouute for the previewed component
  numberOfPages: number; // number of pages of the directory
  previewsToShow: Preview[] = []; // array of previews to show in the directory
  @Input() pageNumber: number; // number of the page that is been rendered

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.definePages(this.previews.length);
    console.log(this.numberOfPages);
    this.definePreviewsToShow(1, this.previews);
    console.log(this.previewsToShow);
  }

  // calculate the number of pages directory will contain
  definePages(numberOfPreviews: number) {
    const numberOfPages = numberOfPreviews / 12;
    this.numberOfPages = Math.ceil(numberOfPages);
  }

  // depending of the page selected, select the previews that will be displayed
  definePreviewsToShow(pageNumber: number, previews: Preview[]) {
    let from: number;
    let until: number;
    this.previewsToShow = [];
    if (pageNumber <= 1) {
      from = 1;
    } else {
      from = (12 * (pageNumber - 1)) + 1; // 12 is the numbre of previews that will be displayed per direcotry page
    }
    until = 12 * pageNumber;

    for (let index = from - 1; index < until; index++) {
      const preview = previews[index];
      if (preview == null) {
        continue;
      } else {
        this.previewsToShow.push(preview);
      }
    }
  }

  // receive a new page number from the directory pagination system and define the previews to show
  receiveNewPageNumber($event: number){
    this.definePreviewsToShow($event, this.previews);
  }

}
