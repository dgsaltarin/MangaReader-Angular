import { Component, OnInit, Input, Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-system',
  templateUrl: './pagination-system.component.html',
  styleUrls: ['./pagination-system.component.css']
})
export class PaginationSystemComponent implements OnInit {

  @Input() numberOfPages: number;
  @Output() newPageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendNewPageNumber(newPageNumber: number){
    this.newPageEvent.emit(newPageNumber);
    console.log(newPageNumber);
  }

}

// pipe that allows to use an ngFor with row numbers
@Pipe({ name: 'times' })
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {} as Iterable<any>;
    iterable[Symbol.iterator] = function*() {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
