import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-statistic-blocks',
  templateUrl: './statistic-blocks.component.html',
  styleUrls: ['./statistic-blocks.component.scss']
})
export class StatisticBlocksComponent implements OnInit {

  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
