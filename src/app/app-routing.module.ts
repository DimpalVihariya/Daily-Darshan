import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DarshanListComponent } from './darshan-list/darshan-list/darshan-list.component';
import { DonationPageComponent } from './donation/donation-page/donation-page.component';
import { EventsComponent } from './events/events/events.component';

const routes: Routes = [{path:'',redirectTo:'darshan-list',pathMatch:'full'},
{path:'darshan-list',component:DarshanListComponent}, 
{path:'donation-page',component:DonationPageComponent},
{path:'events',component:EventsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   FormsModule,
  ReactiveFormsModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
