import { NgModule } from '@angular/core';
// import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { PortalModule } from '@angular/cdk/portal';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';

const CDK_MODULES = [
  // A11yModule,
  ClipboardModule,
  CdkStepperModule,
  CdkTableModule,
  // CdkTreeModule,
  DragDropModule,
  OverlayModule,
  FlexLayoutModule,
  // PortalModule,
  // ScrollingModule
];

@NgModule({
    imports: [
        ...CDK_MODULES
    ],
    exports: [
        ...CDK_MODULES
    ]
})
export class AppCdkModule { }
