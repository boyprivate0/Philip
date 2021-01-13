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

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript

    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

    
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @Input() description: string = '';
  @Input() title: string = '';
  @Input() editorStyle: object = {
    height: '200px !important'
  };

  @Output() updatedData = new EventEmitter();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { description: this.description, title: this.title, editorStyle: this.editorStyle, modules: this.modules };
    const dialogRef = this.matDialog.open(PhilipEditorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => this.updatedData.emit(val)
    );
  }
}
