import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bit-editor-component';
  cardItem = { 
    id: 1,
    title : 'abc',
    description : 'description description description description description description asdasd asdad',
    image: 'https://cdn.shopify.com/s/files/1/0418/6429/8657/products/28_8dd73a51-38c2-4651-9279-3972bc856165_720x.jpg?v=1605700323'
  };
}
