import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HurricanesComponent } from './hurricanes/hurricanes.component';

@NgModule({
  declarations: [
    AppComponent,
    HurricanesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
