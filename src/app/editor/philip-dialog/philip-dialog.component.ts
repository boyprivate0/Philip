import { PhilipEditorComponent } from './../philip-editor/philip-editor.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-philip-dialog',
  templateUrl: './philip-dialog.component.html',
  styleUrls: ['./philip-dialog.component.scss']
})

export class PhilipDialogComponent implements OnInit {

  @Input() modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @Input() description: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() editorStyle: object = {
    height: '200px'
  };
  @Input() images: image[] = [];
  @Input() headerText = 'Edit Text Block';

  @Output() updatedData = new EventEmitter();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      description: this.description,
      title: this.title, text: this.text,
      editorStyle: this.editorStyle,
      modules: this.modules,
      images: this.images,
      textBlockText: this.headerText
    };

    const dialogRef = this.matDialog.open(PhilipEditorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => this.updatedData.emit(val)
    );
  }
}

interface image {
  id: string,
  src: string
}
