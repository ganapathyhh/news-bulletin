import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsBulletinRoutingModule } from './news-bulletin-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NewsBulletinRoutingModule,
    NavigationModule,
    SharedModule
  ]
})
export class NewsBulletinModule { }
