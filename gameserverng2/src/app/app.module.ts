import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { WebsocketService } from './websocket.service';
import { GamedataService } from './gamedata.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterialModule.forRoot()
  ],
  providers: [GamedataService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
