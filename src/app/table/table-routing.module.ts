import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TableWrapperComponent } from './table.component'


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TableWrapperComponent,
      },
    ])
  ],
  exports: [RouterModule],
})
export class TablWrapperRoutingModule { }
