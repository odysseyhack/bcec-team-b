import { Component, OnInit } from '@angular/core';
import {ContractModel} from './contract.model';

@Component({
  selector: 'app-contract-overlay',
  templateUrl: './contract-overlay.component.html',
  styleUrls: ['./contract-overlay.component.scss']
})
export class ContractOverlayComponent implements OnInit {

  contract: ContractModel;

  constructor() { }

  showOverlay() {
    document.getElementById('contract-overlay').style.transform = 'translate(0px, 0px)';
    setTimeout(() => {
      document.getElementById('main-table').style.display = 'none';
    }, 800);
  }

  hideOverlay() {
    document.getElementById('contract-overlay').style.transform = 'translate(0px, -110%)';
    document.getElementById('main-table').style.display = '';
  }

  ngOnInit() {
    this.contract = new ContractModel('YourControl', 'Curtis Conner');
  }

}
