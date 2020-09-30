import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },



];
