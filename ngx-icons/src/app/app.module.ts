import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IconModule } from './icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IconModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
