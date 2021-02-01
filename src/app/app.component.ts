import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bit-editor-component';
  cardItem = {
    id: '1',
    title: 'abc',
    description: 'description dasdas dasd asdasdasd ad asdasd adasdasd ad asdasdasd ad ad ad ad ad adasdasdddddddddddddd asdasd asdad ad ad ad ad ad adasdasdddddddddddddd asdasd asdad',
    image: null
  };
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript


      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],


      ['link', 'image', 'video']                         // link and image, video
    ]
  }

  cardItems = [
    { id: "b27ba369-3580-43cb-87de-c796b2a633ed", title: "price2", type: null, description: null, image: null },
    { id: "9e872ba0-3e4e-46f4-9687-2c0495d782df", title: "text-block-1", type: "text", description: "test123 dsgsdfg fdgsdfgsdf  hdgasf jdgsjhfghadjsg fdasjh", image: null },
    { id: "e9f5bb6c-c5e7-4853-ae34-f92f4cb74369", title: "text-block-1", type: "text", description: "test123 dsgsdfg fdgsdfgsdf  hdgasf jdgsjhfghadjsg fdasjh", image: null },
    { id: "babb3b79-c859-4f33-b865-dd7caa1aa66d", title: "text-block-2", type: "markdown", description: "# header1 ↵ normal text", image: null },
    { id: "56d34a98-bfad-4081-9dd3-e193a78a1cc0", title: "text-block-3", type: "markdown", description: "# header1 ↵ normal text", image: "https://static.cdn366dev.nl/test1/pexels-pixabay-207691.jpg" }
  ];

  images = [
    {
      id: '1',
      src: 'https://picsum.photos/200'
    },
    {
      id: '2',
      src: 'https://picsum.photos/400'
    },
    {
      id: '3',
      src: 'https://picsum.photos/600'
    },
    {
      id: '4',
      src: 'https://picsum.photos/200'
    },
    {
      id: '5',
      src: 'https://picsum.photos/400'
    },
    {
      id: '6',
      src: 'https://picsum.photos/600'
    },
  ]

  updateData($event: any) {
    console.log("va", $event);
  }
}
