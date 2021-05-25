import { LoadingInitialPageComponent } from './components/template/loading-initial-page/loading-initial-page.component';
import { PageInitialViewComponent } from './components/template/page-initial-view/page-initial-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoadingInitialPageComponent
  },
  {
    path: "inicio",
    component: PageInitialViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
