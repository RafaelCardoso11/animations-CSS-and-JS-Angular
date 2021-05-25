import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/template/content/content.component';
import { PageInitialViewComponent } from './components/template/page-initial-view/page-initial-view.component';
import { LoadingInitialPageComponent } from './components/template/loading-initial-page/loading-initial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PageInitialViewComponent,
    LoadingInitialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
