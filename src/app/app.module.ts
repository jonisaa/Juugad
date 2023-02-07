import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialDesignFrameworkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
