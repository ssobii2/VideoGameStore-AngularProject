import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  // displays carousal images
  images = [1, 2, 3].map((n) => `../../assets/sliderimage${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
