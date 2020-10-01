import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { MobilityComponent } from './_components/mobility/mobility.component';
import { PlanerComponent } from './_components/planer/planer.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { AccountComponent } from './_components/account/account.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'mobility', component: MobilityComponent },
  { path: 'planer', component: PlanerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },



];
