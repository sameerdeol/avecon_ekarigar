import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login-page']); // Replace '/next-page' with your target route
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  }


