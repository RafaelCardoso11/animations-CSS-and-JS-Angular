import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-initial-page',
  templateUrl: './loading-initial-page.component.html',
  styleUrls: ['./loading-initial-page.component.scss']
})
export class LoadingInitialPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      return this.router.navigate(['/inicio']);
    }, 4000);
  }
}
