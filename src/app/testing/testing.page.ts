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
  columns = ['Column 1', 'Column 2', 'Column 3', 'column 4', 'column 5'/* ... more columns */];
  data = [
    ['Data 1.1', 'Data 1.2', 'Data 1.3', 'Data1.4','Data 1.5' /* ... more data */],
    ['Data 2.1', 'Data 2.2', 'Data 2.3', 'Data2.4', 'Data 2.5' /* ... more data */],
    // ... more rows
  ];
}
