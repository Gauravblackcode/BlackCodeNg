import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DevelopmentComponent } from './development/development.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ContactComponent } from './contact/contact.component';
import { AnimatedComponent } from './animated/animated.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'animated', component: AnimatedComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
