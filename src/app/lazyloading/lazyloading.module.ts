import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule {
  constructor(){
    console.log("hello lazy loading")
  }
 }
