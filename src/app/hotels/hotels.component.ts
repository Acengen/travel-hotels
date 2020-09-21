import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingserviceService } from '../bookingservice.service';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels:Hotel[];
  hotelClicked:boolean;
  constructor(private bookingService:BookingserviceService, private router:Router) { }

  ngOnInit(): void {
   this.hotels = this.bookingService.getHotels();
   this.bookingService.hotelEmitter.subscribe(
     (hotelclicked:boolean) => {
      this.hotelClicked = hotelclicked
      
     }
   )

   
   
  }



}
