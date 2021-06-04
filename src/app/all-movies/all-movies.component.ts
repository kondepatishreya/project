import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  allMoviesObj;

  constructor(private newObj:DataService) { }

  ngOnInit(): void {
    this.newObj.getAllMovies().subscribe(data=>{this.allMoviesObj=data;console.log(this.allMoviesObj)},
    err=>{console.log("error in receiving allmovies data")})

  }

}
