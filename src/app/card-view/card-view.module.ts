import { CardViewComponent } from './card-view-component/card-view-component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports: [
    CardViewComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class CardViewModule { }
