import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shop= [
    {'id':1,'name':'Vooc#1','description':'Price: 10 Unique rate: 0.90','image':'../../assets/vooc1.jpg'},
    {'id':2,'name':'Vooc#2','description':'Price: 10 Unique rate: 0.92','image':'../../assets/vooc2.jpg'},
    {'id':3,'name':'Vooc#3','description':'Price: 10 Unique rate: 0.87','image':'../../assets/vooc3.jpg'},
    {'id':4,'name':'Vooc#4','description':'Price: 15 Unique rate: 0.95','image':'../../assets/vooc4.jpg'}
  ]

}
