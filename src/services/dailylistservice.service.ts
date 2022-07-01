import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IMurti } from 'src/app/models/murti.interface';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DailylistserviceService {
  getDailylisttest(): any {
    throw new Error('Method not implemented.');
  }
  getMurti() {
    throw new Error('Method not implemented.');
  }
  listmurti : IMurti[] | any;
  private murtis  = [];


   constructor(private http : HttpClient) { }
 

  getDailylist(): Observable<IMurti[]> {
    return this.http
      .get<IMurti[]>("/assets/murti-list.json")
     
  }

}



