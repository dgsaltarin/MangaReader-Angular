import { Component, OnInit, Input, HostListener} from '@angular/core';
import { Page } from '../../../../core/models/page.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  @Input() page: Page;
  @Input() nextPageRoute: string;
  @Input() previusPageRoute: string;
  @Input() actualPageNumber: number;
  @Input() totalPageNumber: number;

  halfWidth = window.innerWidth / 2;

  constructor(private routerPage: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  @HostListener('mouseup', ['$event']) onClick($event){
    console.log('Click event fired', $event);
    console.log(this.halfWidth);
    if ($event.clientX > this.halfWidth && this.actualPageNumber < this.totalPageNumber){
      this.nextPageFunction();
    }
    if ($event.clientX < this.halfWidth && this.actualPageNumber > 1){
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
