import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DevelopmentComponent } from './development/development.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, DevelopmentComponent, GraphicsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
