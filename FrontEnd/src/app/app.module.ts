import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import the HttpClientModule into the AppModule to use the HttpClient
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the ListComponent
import { ListComponent } from './list/list.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    // Add the ListComponent to the declarations
    ListComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    // Import the HttpClientModule into the AppModule to use the HttpClient
    HttpClientModule
  ],
  // Add the ApiService to the list of providers
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
