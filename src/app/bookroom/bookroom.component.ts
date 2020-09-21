import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent implements OnInit {
  defaultValue = "LE YULE HOTEL AND SPA";
  isConfigure:boolean = false;
  error:string;
  submittersuccesfull:boolean = false;
  constructor(private bookingService:BookingserviceService, private router: Router) { }

  ngOnInit(): void {
       
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const name = form.value.name;
    const card = form.value.number;
    const aprt = form.value.select;
      this.bookingService.makeApostRequest(name,email,card,aprt).subscribe(
        (responsiveData) => {
          console.log(responsiveData)
          this.submittersuccesfull = true;
          this.isConfigure = false;
        },
        (error) => this.error = "Something went wrong!"
      )
  }

  onConfig() {
    this.isConfigure = true;
  }

  notConfig() {
    this.isConfigure = false;
  }
}
