import { PhilipEditorModule } from './editor/philip-editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewModule } from './list-view/list-view.module';
// import { PhilipEditorComponent } from './editor/philip-editor/philip-editor.component';
// import { CardViewModule } from './card-view/card-view.module';
import { QuillModule } from 'ngx-quill'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListViewModule,
    NoopAnimationsModule,
    PhilipEditorModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
