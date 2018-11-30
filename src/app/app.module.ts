import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { JsonredService } from './services/jsonred.service';
import { SimpleTimer } from 'ng2-simple-timer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ], exports: [HttpModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [JsonredService, SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
