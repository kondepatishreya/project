import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProvidersComponent } from './providers/providers.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'allMovies',component:AllMoviesComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'providers',component:ProvidersComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
