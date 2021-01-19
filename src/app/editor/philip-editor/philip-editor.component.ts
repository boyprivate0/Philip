import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-philip-editor',
    templateUrl: './philip-editor.component.html',
    styleUrls: ['./philip-editor.component.scss']
})
export class PhilipEditorComponent {
    public modules = {};
    public editorStyle = {};
    public images: string[] = [];
    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<PhilipEditorComponent>,
        @Inject(MAT_DIALOG_DATA) { description, title, text, editorStyle, modules, images }: any) {

        this.form = this.fb.group({
            description: [description, Validators.required],
            title: [title, Validators.required],
            text: [text],
            images: []
        });
        this.form.controls.images.setValue([]);
        this.editorStyle = editorStyle;
        this.modules = modules;
        this.images = images;
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

    saveText($event: any) {
        this.form.controls.text.setValue($event.text);
    }

    onFileComplete(data: any) {
        const reader = new FileReader();
        
        reader.readAsDataURL(data); 
        reader.onload = (_event) => {
            if(typeof reader.result === 'string') 
            this.images.push(reader.result); 
        }
        this.form.controls.images.setValue(this.form.value.images.concat(data));
    }
}
