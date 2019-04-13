import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ContractSavings} from '../../../models/contract.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'investors', 'risk', 'compatibility', 'Profit', 'Period'];
  contract: ContractSavings[] = [new ContractSavings('YourControl',
    19219, 12, 92, 2991929, 10, 1),new ContractSavings('GiveUsControl',
    34932, 28, 87, 2991929, 10, 1)
  ];


  dataSource = new MatTableDataSource(this.contract);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
