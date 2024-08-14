import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nineColumnItems = Array.from({ length: 9 }, (_, i) => `9-Col Item ${i + 1}`);
  sixColumnItems = Array.from({ length: 6 }, (_, i) => `6-Col Item ${i + 1}`);
}
