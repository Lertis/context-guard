import { Directive, Input } from '@angular/core';
import { TableRowTemplateContext } from '../interfaces'

@Directive({
  selector: 'ng-template[contextTableRow]',
})
export class TableRowTemplateDirective<TItem extends object> {
  @Input('contextTableRow') data!: TItem[];

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableRowTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableRowTemplateContext<TContextItem> {
    return true;
  }
}
