import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  buttonInitClick = document.querySelector(".buttonInicial");
  contentAnimates = document.querySelector(".carousel-container");
  tradeColorBackgroud = document.querySelector(".backgroudGradient")
  balls = document.querySelector(".ball");
  containerBalls = document.querySelector(".progressBall");
  contador = 0;
  concatenando = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  tradeViewPage() : void{
    this.contentAnimates!.classList.add("on");
    this.tradeColorBackgroud!.classList.add("tradeBackgroud");
    this.containerBalls!.classList.add("on");
  }
}
