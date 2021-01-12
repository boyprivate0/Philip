import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-philip-editor',
  templateUrl: './philip-editor.component.html',
  styleUrls: ['./philip-editor.component.scss']
})
export class PhilipEditorComponent {
  @Input() modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
   
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
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
  
  form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<PhilipEditorComponent>,
        @Inject(MAT_DIALOG_DATA) {description, title}: any ) {
      
        this.form = this.fb.group({
            description: [description, Validators.required],
            title: [title, Validators.required]
        });
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
