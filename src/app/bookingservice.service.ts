import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Hotel } from './hotels/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  
  name:string;
  email:string;
  card:number;
  apartman:string;
  hotelclicked:boolean;

  hotelEmitter = new EventEmitter<boolean>();

  hotels:Hotel[] = [
    {image:"../../assets/images/257562720.jpg", name:"Fiss", price:122},
    {image:"../../assets/images/adler-dolo.png", name:"Aqua Dome", price:155},
    {image:"../../assets/images/afbbdb9c6e714161d784e38f162dae24.jpg", name:"Miramonti", price:149},
    {image:"../../assets/images/alps-hotels-online-booking-01.jpg", name:"Hallstat", price:299},
    {image:"../../assets/images/dam-images-travel-alps-resort-towns-alps-resort-town-hotels-01-courchevel-french-alps-ski-village-h670.jpg", name:"Courchevel", price:119},
    {image:"../../assets/images/hotelimage.jpg", name:"Alamy", price:132},
    {image:"../../assets/images/Heated-infinity-pool-at-Hotel-Villa-Honegg-offers-sweeping-views-of-Swiss-Alps_17.jpg", name:"Honegg", price:149},
    {image:"../../assets/images/8805_romantik_hotel_schoenegg_0511478.jpg", name:"Schoenegg", price:169},
    {image:"../../assets/images/maxresdefault.jpg", name:"Le Chardon", price:129},
    {image:"../../assets/images/arosea-life-balance-hotel-suedtirol.jpg", name:"Arosea", price:189},
    {image:"../../assets/images/5ee3932d3f7370154b58fc48.jpg", name:"Chalet Hotel", price:119},
    {image:"../../assets/images/hq_ts6a5546_preview_0080049e30c1c21529321481.jpeg", name:"Miramonti", price:159}
  ]
  //isConfig:boolean = false;

  //isConfigEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  makeApostRequest(name:string, email:string, card:number, apartman:string) {
    return this.http.post("https://alps-6adfd.firebaseio.com/orders.json", {
      name:name,    
      email:email,
      card:card,
      apartman:apartman  
    })
  }
  
  getHotels() {
    return this.hotels.slice();
  }

  getHotelsById(id:number) {
    return this.hotels[id];
  }

  onhotelClick() {
    this.hotelclicked = true;
    this.hotelEmitter.emit(this.hotelclicked);
  }
  goBackFromHotel() {
    this.hotelclicked = false;
    this.hotelEmitter.emit(this.hotelclicked);
  }
}
