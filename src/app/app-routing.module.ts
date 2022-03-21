import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleyComponent } from './galley/galley.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'} ,
  {path:'home', canActivate:[AuthGuard], component:HomeComponent} ,
  {path:'about' , canActivate:[AuthGuard] , component:AboutComponent} ,
  {path:'gallery' , canActivate:[AuthGuard], component:GalleyComponent} ,
  {path:'movie', canActivate:[AuthGuard] , component:MoviesComponent} ,
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent} ,
  {path:'contacts', canActivate:[AuthGuard] , component:ContactsComponent} ,
  {path:'login' , component:LoginComponent} ,
  {path:'register' , component:RegisterComponent} ,
  {path:'moviedetails/:id' , component:MoviedetailsComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
