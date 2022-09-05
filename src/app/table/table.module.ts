import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableWrapperComponent } from './table.component';

import { TablWrapperRoutingModule } from './table-routing.module'
import { TableModule } from '../shared/table'


@NgModule({
  declarations: [
    TableWrapperComponent
  ],
  imports: [
    CommonModule,
    TablWrapperRoutingModule,
    TableModule
  ]
})
export class TableWrapperModule { }
