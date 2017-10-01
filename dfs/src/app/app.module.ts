import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OverUnderService } from './over-under/over-under.service';
import { OverUnderComponent } from './over-under/over-under.component';
import { DvoaComponent } from './dvoa/dvoa.component';

@NgModule({
  declarations: [
    AppComponent,
    OverUnderComponent,
    DvoaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule
    // AgGridModule.withComponents([])
  ],
  providers: [OverUnderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
