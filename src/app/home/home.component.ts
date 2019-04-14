import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {ContractOverlayComponent} from "./contract-overlay/contract-overlay.component";
import {ListComponent} from "./list/list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild(ContractOverlayComponent) contractChild: ContractOverlayComponent;
  @ViewChild(ListComponent) listChild: ListComponent;

  statisticButtonClicked(event: string) {
    switch (event) {
      case 'new':
        this.listChild.showNew();
        break;
      case 'rating':
        this.listChild.showRating();
        break;
      case 'popular':
        this.listChild.showPopular();
        break;
      case 'top':
        this.listChild.showTop();
        break;
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
