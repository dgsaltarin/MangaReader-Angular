import { Component, OnInit, Input } from '@angular/core';
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
