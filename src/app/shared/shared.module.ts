import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxSpinnerModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
    NgxSpinnerModule
  ],
  declarations: [
    SuccessDialogComponent, 
    ErrorDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
