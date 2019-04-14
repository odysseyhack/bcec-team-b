import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {ContractSavings} from '../../../models/contract.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Output() cellClick: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = ['name', 'investors', 'risk', 'compatibility', 'profit', 'period'];
  pool: ContractSavings[] = [
    new ContractSavings('YourControl', 1231, 'High', 92, 9929, 8, 1),
    new ContractSavings('APG Stocks', 12930, 'Low', 96, 299129, 6, 3),
    new ContractSavings('APG Derived', 290, 'Medium', 79, 2929, 2, 3),
    new ContractSavings('To The Moon', 90324, 'Very low', 89, 2456, 7, 2),
    new ContractSavings('Cherry\'s Pens', 11, 'Medium', 43, 12345, 10, 8),
    new ContractSavings('GiveUsControl', 921, 'Low', 87, 19239, 13, 5),
    new ContractSavings('Grey and Co', 921, 'Low', 87, 19239, 13, 5),
    new ContractSavings('Williams and Co', 90324, 'Very low', 89, 2456, 7, 2),
    new ContractSavings('Doop Industries', 90324, 'Very low', 89, 2456, 7, 2),
    new ContractSavings('Kowalski Unlimited', 90324, 'Very low', 89, 2456, 7, 2),
    new ContractSavings('Advert Advertise', 90324, 'Very low', 89, 2456, 7, 2),
    new ContractSavings('Vader Industry', 921, 'Low', 87, 19239, 13, 5)
  ];

  contract: ContractSavings[] = [
    this.pool[0],
    this.pool[1],
    this.pool[2],
    this.pool[3],
    this.pool[4],
    this.pool[5],
    this.pool[6],
    this.pool[7],
    this.pool[8],
    this.pool[9],
  ]

  dataSource = new MatTableDataSource(this.contract);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.contract);
    this.dataSource.sort = this.sort;
    this.table.renderRows();
    const el = document.getElementById('search-input') as HTMLInputElement;
    el.value = '';
  }

  showNew() {
    this.contract = [
      this.pool[3],
      this.pool[4],
      this.pool[5],
      this.pool[6],
      this.pool[7],
    ];
    this.refresh();
  }

  showPopular() {
    this.contract = [
      this.pool[7],
      this.pool[0],
      this.pool[1],
      this.pool[10],
    ];
    this.refresh();
  }

  showRating() {
    this.contract = [
      this.pool[6],
      this.pool[2],
      this.pool[1],
      this.pool[8],
      this.pool[9],
    ];
    this.refresh();
  }

  showTop() {
    this.contract = [
      this.pool[3],
      this.pool[2],
      this.pool[5],
      this.pool[9],
      this.pool[6],
      this.pool[4],
    ];
    this.refresh();
  }

  cellClicked() {
    this.cellClick.emit();
  }

}
