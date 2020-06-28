import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { Preview } from '../../../core/models/preview.model';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.css']
})
export class PreviewCardComponent implements OnInit {

  constructor() { }

  @Input() preview: Preview;

  @Input() route: string;

  ngOnInit(): void {
  }

}

@Pipe({ name: 'titlePipe'})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    const newTitle = value.replace(/-/gi, ' ');
    return newTitle;
  }
}
