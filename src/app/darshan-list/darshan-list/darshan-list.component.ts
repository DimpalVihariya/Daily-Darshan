import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { IMurti } from 'src/app/models/murti.interface';
import { DailylistserviceService } from 'src/services/dailylistservice.service';
import { DatastoreService } from 'src/services/datastore.service';

@Component({
  selector: 'app-darshan-list',
  templateUrl: './darshan-list.component.html',
  styleUrls: ['./darshan-list.component.scss']
})
export class DarshanListComponent implements OnInit  {
  Murti : any = [];
  data: any;
  subscription!: Subscription;
  constructor(private dailylistserviceService: DailylistserviceService,private datastore : DatastoreService,private router: Router) { }

  ngOnInit(): void {

      this.dailylistserviceService.getDailylist().subscribe(
      (data:IMurti[]) => console.log(data));

      //this.data = this.dailylistserviceService.getDailylisttest();
  }

  OnDestroy():void{
    this.subscription;
  }

}
