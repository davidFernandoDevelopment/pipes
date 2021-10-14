import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  dailyNetSales: number = 1221121.256164;
  roi: number = 0.42332;

  constructor() { }

  ngOnInit(): void {
  }

}
