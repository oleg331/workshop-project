import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ModalModule } from './modules/modal/modal.module';

import { HeaderComponent } from './components/header/header.component';
import { WrapperLayoutComponent } from './components/wrapper-layout/wrapper-layout.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';

@NgModule({
  declarations: [WrapperLayoutComponent, ContentLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ModalModule,
    HeaderComponent,
    WrapperLayoutComponent,
    ContentLayoutComponent
  ]
})
export class SharedModule { }
