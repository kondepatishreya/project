import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  obj;

  constructor(private newObj:DataService) { }

  ngOnInit(): void {
    this.newObj.getNewArrivals().subscribe(data=>{this.obj=data;console.log(this.obj)},
      err=>{console.log("error in receiving new arrivals data")})
    }
    

}
