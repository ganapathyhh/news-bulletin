import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';

@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TopbarComponent,
    SidenavMenuComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
