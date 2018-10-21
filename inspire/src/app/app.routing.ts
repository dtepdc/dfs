import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: '',  redirectTo: '/books', pathMatch: 'full' },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


