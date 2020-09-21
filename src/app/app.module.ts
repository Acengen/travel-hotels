import { BookroomComponent } from './bookroom/bookroom.component';
import { NightLifeComponent } from './night-life/night-life.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';
import { FormsModule } from '@angular/forms';
import { ButtonbookingDirective } from './buttonbooking.directive';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelItemComponent } from './hotels/hotel-item/hotel-item.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { StartPageComponent } from './hotels/start-page/start-page.component';

export const routes: Routes = [
  {path:"", redirectTo:"/alps-story", pathMatch:'full'},
  {path: "alps-story", component: MainPageComponent},
  {path: "about", component:HowToComponent},
  {path: "hotels", component:HotelsComponent, children:[
    {path:"", component:StartPageComponent},
    {path: ":id", component: HotelDetailComponent}
  ]},
  {path: "booking", component: BookroomComponent},
  {path:"page-not-found", component:PageNotFoundComponent},
  {path:"**", redirectTo:'/page-not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    BookroomComponent,
    BookroomComponent,
    HotelsComponent,
    HowToComponent,
    ButtonbookingDirective,
    PageNotFoundComponent,
    HotelItemComponent,
    StartPageComponent,
    HotelDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
