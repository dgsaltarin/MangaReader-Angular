import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  @Input() page: Page;

  constructor() { }

  ngOnInit(): void {
  }

}
