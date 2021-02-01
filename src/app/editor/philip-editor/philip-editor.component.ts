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
    public images: image[] = [];
    public form: FormGroup;
    public newImages: string[] = [];
    public textBlockText: string;
    private uploadedImages: File[] = [];

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<PhilipEditorComponent>,
        @Inject(MAT_DIALOG_DATA) { description, title, text, editorStyle, modules, images, textBlockText }: any) {

        this.form = this.fb.group({
            description: [description, Validators.required],
            title: [title, Validators.required],
            text: [text],
            images: [],
            removedImages: []
        });
        this.form.controls.images.setValue([]);
        this.form.controls.removedImages.setValue([]);
        this.editorStyle = editorStyle;
        this.modules = modules;
        this.images = images;
        this.textBlockText = textBlockText;
    }

    ngOnInit() {
    }

    save() {
        this.form.controls.images.setValue(this.uploadedImages);
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

    saveText($event: any) {
        this.form.controls.text.setValue($event.text);
    }

    onFileComplete(data: File[]) {
        this.uploadedImages = data;
        this.newImages = [];
        for (let i = 0; i < data.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(data[i]);
            reader.onload = (_event) => {
                if (typeof reader.result === 'string')
                    this.newImages.push(reader.result);
            }
        }
    }

    removeImage(index: number) {
        const removeImages = this.form.controls.removedImages.value;
        removeImages.push(this.images[index].id)
        this.form.controls.removedImages.setValue(removeImages);
        delete this.images[index];
    }

    removeNewImage(index: number) {
        this.uploadedImages = this.uploadedImages.filter((image: File, imgIndex: number) => {
            return imgIndex !== index;
        })
        this.newImages = this.newImages.filter((image: string, imgIndex: number) => {
            return imgIndex !== index;
        })
    }
}

interface image {
    id: string,
    src: string
}