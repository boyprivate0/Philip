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
    @Output() complete = new EventEmitter<Array<File>>();

    private files: Array<File> = [];

    constructor() { }

    ngOnInit() {
    }

    onClick() {
        const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        fileUpload.onchange = () => {
            if (fileUpload && fileUpload.files)
                for (let index = 0; index < fileUpload.files.length; index++) {
                    const file = fileUpload.files[index];
                    this.files.push(file);
                }
            this.uploadFiles();
        };
        fileUpload.click();
    }

    private uploadFiles() {
        this.complete.emit(this.files);
    }

}
