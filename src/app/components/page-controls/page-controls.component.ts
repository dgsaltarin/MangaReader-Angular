import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-controls',
  templateUrl: './page-controls.component.html',
  styleUrls: ['./page-controls.component.css']
})
export class PageControlsComponent implements OnInit {

  @Input() actualPage: number;
  @Input() totalPages: number;
  @Input() nextPageRoute: string;
  @Input() lastPageRoute: string;
  @Input() previusPageRoute: string;
  @Input() firstPageRoute: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.actualPage);
    console.log(this.totalPages);
    console.log(this.nextPageRoute);
    console.log(this.lastPageRoute);
    console.log(this.previusPageRoute);
    console.log(this.firstPageRoute);
  }

}
