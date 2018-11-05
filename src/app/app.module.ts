import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalManagerModule } from '@browninglogic/ng-modal';
import { FileDropModule } from '@browninglogic/ng-file-drop';
import { NgLoadingIndicatorModule } from '@browninglogic/ng-loading-indicator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalManagerModule,
    FileDropModule,
    NgLoadingIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
