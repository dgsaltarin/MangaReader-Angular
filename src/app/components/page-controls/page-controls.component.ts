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

  constructor() { }

  ngOnInit(): void {
  }

}
