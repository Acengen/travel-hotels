import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookingserviceService } from 'src/app/bookingservice.service';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  hotel:Hotel;
  id:number;
  constructor(private bookingService:BookingserviceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params) => {
          this.id = +param['id'];
         this.hotel = this.bookingService.getHotelsById(this.id);
      }
    )
  }

  goBack() {
      this.router.navigate(['/hotels']);
      this.bookingService.goBackFromHotel();
  }

}
