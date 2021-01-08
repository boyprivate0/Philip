import { CardItem } from '../card-interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view-component',
  templateUrl: './card-view-component.html',
  styleUrls: ['./card-view-component.scss']
})
export class CardViewComponent {
  
  @Input() cardItem: CardItem = { 
    id: 1,
    title : 'abc',
    description : 'description dasdas dasd asdasdasd ad asdasd adasdasd ad asdasdasd ad ad ad ad ad adasdasdddddddddddddd asdasd asdad ad ad ad ad ad adasdasdddddddddddddd asdasd asdad',
    image: 'https://cdn.shopify.com/s/files/1/0418/6429/8657/products/28_8dd73a51-38c2-4651-9279-3972bc856165_720x.jpg?v=1605700323'
  };

  @Output() editItemEvent = new EventEmitter();

  constructor() { }

  public editItem(id: number): void {
    this.editItemEvent.emit(id);
  }
}
