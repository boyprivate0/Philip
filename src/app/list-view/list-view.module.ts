import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewModule } from '@bit/waqar_ali.philip-collection.card-view';
import { ListViewComponent } from './list-view-component/list-view-component';

@NgModule({
  declarations: [
    ListViewComponent
  ],
  imports: [
    CommonModule,
    CardViewModule
  ],
  exports: [
    ListViewComponent
  ]
})
export class ListViewModule { }
