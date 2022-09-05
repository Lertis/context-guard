import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TableHeaderTemplateDirective, TableRowTemplateDirective } from '../directives'

@Component({
  selector: 'context-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TItem extends object> {
  @Input() data!: TItem[];

  @ContentChild(TableHeaderTemplateDirective, { read: TemplateRef }) headers?: TemplateRef<any>;
  @ContentChild(TableRowTemplateDirective, { read: TemplateRef }) rows?: TemplateRef<any>;
}
