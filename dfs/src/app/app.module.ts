import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OverUnderService } from './over-under/over-under.service';
import { DvoaService } from './dvoa/dvoa.service';
import { OverUnderComponent } from './over-under/over-under.component';
import { DvoaComponent } from './dvoa/dvoa.component';
import { SortStatsPipe } from './pipes/sort-stats.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OverUnderComponent,
    DvoaComponent,
    SortStatsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OverUnderService, DvoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
