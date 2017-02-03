import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [GamedataService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
