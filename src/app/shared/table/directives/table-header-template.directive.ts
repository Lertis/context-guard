import { Directive, Input } from '@angular/core';
import { TableHeaderTemplateContext } from '../interfaces'

@Directive({
  selector: 'ng-template[contextTableHeader]',
})
export class TableHeaderTemplateDirective<TItem extends object> {

  @Input('contextTableHeader') data!: TItem[] | '';

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableHeaderTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableHeaderTemplateContext<TContextItem> {
    return true;
  }
}
