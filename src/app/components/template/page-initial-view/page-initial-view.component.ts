import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-initial-view',
  templateUrl: './page-initial-view.component.html',
  styleUrls: ['./page-initial-view.component.scss']
})
export class PageInitialViewComponent implements OnInit {
  contentAnimates = document.getElementsByClassName("content-two-sobre");
  loadingAnimate = document.getElementsByClassName("content")
  model = document.getElementsByClassName("model-container")
  modelBackgroud = document.getElementsByClassName("backgroud-model")
  buttonNextActive = document.getElementsByClassName("buttonNext")
  constructor() { }

  ngOnInit(): void {
  }

  tradeViewPage(): void {
    this.contentAnimates.item(0)?.classList.add("on")
    this.loadingAnimate.item(0)?.classList.add("on")
    setTimeout(() => {
      this.buttonNextActive.item(0)?.classList.add("on")
    }, 3000);
  }
  
  modelActive() {
    this.model.item(0)?.classList.add("on")
    this.modelBackgroud.item(0)?.classList.add("on")
  }
}
