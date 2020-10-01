import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './_components/nav-menu/nav-menu.component';
import { HomeComponent } from './_components/home/home.component';
import { MobilityComponent } from './_components/mobility/mobility.component';
import { PlanerComponent } from './_components/planer/planer.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { AccountComponent } from './_components/account/account.component';
import { CarouselPauseComponent } from './_components/carousel-pause/carousel-pause.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MobilityComponent,
    PlanerComponent,
    AboutUsComponent,
    AccountComponent,
    CarouselPauseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    ErrorInterceptorProvider,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
