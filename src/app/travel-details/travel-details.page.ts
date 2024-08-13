import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.page.html',
  styleUrls: ['./travel-details.page.scss'],
})
export class TravelDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToTraveldata(){
    this.router.navigate(['/travel-detail-data']);
  }
}
