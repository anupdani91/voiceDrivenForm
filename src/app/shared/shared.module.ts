import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ModalHelpComponent } from './components/modal-help/modal-help.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalHelpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ModalHelpComponent,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
