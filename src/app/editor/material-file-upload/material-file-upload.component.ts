import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-material-file-upload',
    templateUrl: './material-file-upload.component.html',
    styleUrls: ['./material-file-upload.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('in', style({ opacity: 100 })),
            transition('* => void', [
                animate(300, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class MaterialFileUploadComponent implements OnInit {
    /** Link text */
    @Input() text = 'Upload';
    /** Name used in form which will be sent in HTTP request. */
    @Input() param = 'file';
    /** File extension that accepted, same as 'accept' of <input type="file" />. 
        By the default, it's set to 'image/*'. */
    @Input() accept = 'image/*';
    /** Allow you to add handler after its completion. Bubble up response text from remote. */
    @Output() complete = new EventEmitter<string>();

    private files: Array<FileUploadModel> = [];

    constructor() { }

    ngOnInit() {
    }

    onClick() {
        const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        fileUpload.onchange = () => {
            if (fileUpload && fileUpload.files)
                for (let index = 0; index < fileUpload.files.length; index++) {
                    const file = fileUpload.files[index];
                    this.files.push({
                        data: file, state: 'in',
                        inProgress: false, progress: 0, canRetry: false, canCancel: true
                    });
                }
            this.uploadFiles();
        };
        fileUpload.click();
    }

    cancelFile(file: FileUploadModel) {
        this.removeFileFromArray(file);
    }

    retryFile(file: FileUploadModel) {
        this.uploadFile(file);
        file.canRetry = false;
    }

    private uploadFile(file: FileUploadModel) {
        const fd = new FormData();
        fd.append(this.param, file.data);
        this.complete.emit(file.data);
    }

    private uploadFiles() {
        const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        fileUpload.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }

    private removeFileFromArray(file: FileUploadModel) {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }

}

export class FileUploadModel {
    data: any;
    state: string;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;

    constructor() {
        this.data = '';
        this.state = '';
        this.inProgress = false;
        this.progress = 0;
        this.canRetry = false;
        this.canCancel = false;
    }
}