import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  
  constructor(private hc:HttpClient) { }


  //getting new arrivals data
  getNewArrivals():Observable<any>{
    const params={
      "region": "IN",
      "page": "1",
    
    }
    const header={

      "useQueryString":true
	    

    }
    return this.hc.get("https://ott-details.p.rapidapi.com/getnew",{"headers":
    {'x-rapidapi-key': '0b5feda7d8mshe9e36948bbacf50p10bd2ajsn21e97089ee5c',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com',},params:params});
    
  }

  //method to get all movies data
  getAllMovies():Observable<any>
  {
    const params={
      "title": "Endgame",
      "page": "1"
    
    }
    const header={

      "useQueryString":true
	    

    }
    return this.hc.get("https://ott-details.p.rapidapi.com/search",{"headers":{
      'x-rapidapi-key': '0b5feda7d8mshe9e36948bbacf50p10bd2ajsn21e97089ee5c',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com',},params:params});
  }


  //get ott providers
  getOttProviders():Observable<any>
  {
    const params={
      "region": "IN"
    
    }
    const header={

      "useQueryString":true
	    

    }
    return this.hc.get("https://ott-details.p.rapidapi.com/getPlatforms",{"headers":{
      'x-rapidapi-key': '0b5feda7d8mshe9e36948bbacf50p10bd2ajsn21e97089ee5c',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com'

    ,},params:params});
  }

  


}
