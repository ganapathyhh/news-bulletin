import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { AppCdkModule } from '../app-cdk.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCdkModule,
    RouterModule
  ],
  exports: [
    AppMaterialModule,
    AppCdkModule,
    RouterModule
  ]
})
export class SharedModule { }
