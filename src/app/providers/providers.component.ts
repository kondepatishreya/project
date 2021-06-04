import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {


  ottProvidersObj;

  constructor(private newObj:DataService) { }

  ngOnInit(): void {
    this.newObj.getOttProviders().subscribe(data=>{this.ottProvidersObj=data;console.log(this.ottProvidersObj)},
    err=>{console.log("error in receiving ott providers data")})

  }

}
