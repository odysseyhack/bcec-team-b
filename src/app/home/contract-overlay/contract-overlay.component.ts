import { Component, OnInit } from '@angular/core';
import {ContractModel} from './contract.model';

@Component({
  selector: 'app-contract-overlay',
  templateUrl: './contract-overlay.component.html',
  styleUrls: ['./contract-overlay.component.scss']
})
export class ContractOverlayComponent implements OnInit {

  contract: ContractModel;

  lastPos = 0;

  constructor() { }

  showOverlay() {
    document.getElementById('contract-overlay').style.transform = 'translate(0px, 0px)';
    this.lastPos = document.documentElement.scrollTop;

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      document.getElementById('main-table').style.display = 'none';
    }, 800);
  }

  hideOverlay() {
    document.getElementById('contract-overlay').style.transform = 'translate(0px, -110%)';
    document.getElementById('main-table').style.display = '';
    window.scroll({
      top: this.lastPos,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    this.contract = new ContractModel('YourControl', 'Curtis Conner');
  }

}
