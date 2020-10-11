import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { MobilityComponent } from './_components/mobility/mobility.component';
import { PlanerComponent } from './_components/planer/planer.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { AccountComponent } from './_components/account/account.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member.detail.resolver';
import { MemberListResolver } from './_resolvers/member.list.resolver';
import { MemberEditComponent } from './_components/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member.edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'mobility', component: MobilityComponent },
  { path: 'planer', component: PlanerComponent,
    resolve: { users: MemberListResolver } },
  { path: 'planer/:id', component: MemberDetailComponent,
    resolve: { user: MemberDetailResolver }},
  { path: 'member/edit', component: MemberEditComponent,
    resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChanges]},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },



];
