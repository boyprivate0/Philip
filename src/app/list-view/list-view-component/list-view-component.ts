import { CardItem } from '../card-interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-view-component',
  templateUrl: './list-view-component.html',
  styleUrls: ['./list-view-component.scss']
})
export class ListViewComponent {

  @Input() cardItems: CardItem[] = [];

  @Output() editItemEvent = new EventEmitter();

  constructor() { }

  public editItem(id: string): void {
    this.editItemEvent.emit(id);
  }
}
