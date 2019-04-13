import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSidenavModule, MatSort, MatSortModule, MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {MatInputModule, MatMenuModule, MatToolbarModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule
  ]
})
export class CustomMaterialModule { }
