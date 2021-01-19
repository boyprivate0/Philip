import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PhilipEditorComponent } from './philip-editor/philip-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'
import { MatDialogModule } from '@angular/material/dialog';
import { PhilipDialogComponent } from './philip-dialog/philip-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

export const quillModule = QuillModule.forRoot();

@NgModule({
  declarations: [
    PhilipEditorComponent,
    PhilipDialogComponent,
    MaterialFileUploadComponent
  ],
  imports: [
    CommonModule,
    quillModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    PhilipDialogComponent,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
})
export class PhilipEditorModule { }
