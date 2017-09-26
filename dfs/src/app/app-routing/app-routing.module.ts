import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { OverUnderComponent } from '../over-under/over-under.component';
import { DvoaComponent } from '../dvoa/dvoa.component';

const routes: Routes = [
  {
        path: '',
        component: OverUnderComponent
    },
    {
        path: 'dvoa',
        component: DvoaComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }