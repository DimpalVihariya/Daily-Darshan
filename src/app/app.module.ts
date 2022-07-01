import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarshanListComponent } from './darshan-list/darshan-list/darshan-list.component';
import { DonationPageComponent } from './donation/donation-page/donation-page.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { EventsComponent } from './events/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    DarshanListComponent,
    DonationPageComponent,
    NavBarComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
