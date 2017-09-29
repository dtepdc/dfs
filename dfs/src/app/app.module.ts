import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

// import { AgGridModule } from 'ag-grid-angular/main';
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
    MdTableModule,
    CdkTableModule
    // AgGridModule.withComponents([])
  ],
  providers: [OverUnderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
