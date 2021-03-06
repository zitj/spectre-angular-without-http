import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './shared-components/success/success.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './shared-components/alert/alert.component';

@NgModule({
  declarations: [AppComponent, SuccessComponent, AlertComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
