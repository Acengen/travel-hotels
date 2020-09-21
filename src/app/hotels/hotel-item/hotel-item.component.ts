import { BookingserviceService } from './../../bookingservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
 @Input() gethotel:Hotel;
 @Input() id:number;

  constructor(private service:BookingserviceService) { }

  ngOnInit(): void {
  
  }

  onHotelClick(){
      this.service.onhotelClick();
  }
}
