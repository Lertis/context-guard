import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TableComponent } from './table/table.component'
import { TableHeaderTemplateDirective, TableRowTemplateDirective } from './directives'

const COMPONENTS = [TableComponent]

const DIRECTIVES = [TableHeaderTemplateDirective, TableRowTemplateDirective]

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class TableModule { }
