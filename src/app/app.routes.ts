import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
];
