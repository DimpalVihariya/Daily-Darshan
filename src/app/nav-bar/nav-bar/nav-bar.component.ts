import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title: string |any 
  constructor() { }

  ngOnInit(): void {
    this.title = "murti darshan"
  }

}
