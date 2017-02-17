import {Injectable, NgZone} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export interface Games {
	name: string,
	categories: Categories,
  players: string[],
  _id: number
}

export interface Categories {
  name: string;
  questions: Questions,
}

export interface Questions {
  question: string[],
  answer: string,
  points: number,
  played: boolean
}

@Injectable()
export class GamedataService {

  //public games: Subject<Games>  = new Subject<Games>();
  public games: Games[];

  zone: NgZone;
	private url = 'ws://localhost:3000';  
  private socket: SocketIOClient.Socket;

  testText: string;
  
  constructor(){
    this.socket = io.connect(this.url);
  }

  sendMessage(message){
    this.socket.emit('add-message', message);   
  }

  // nur zum test
  getMessage() {
    let observable = new Observable<string>(observer => {
      console.log("Message: Connecting socket...");
      //this.socket = io(this.url);
      this.socket.on('get-message', (data) => {
          console.log('get-message');
          this.testText = data;
          console.log(data + " == " + this.testText);
          observer.next(this.testText);
      });
      return () => {
        this.socket.disconnect();
      };  
    })    
    return observable;
  }

  
  getGames() {
    let observable = new Observable<Games[]>(observer => {
      console.log("Game: Connecting socket...");
      //this.socket = io(this.url);
      this.socket.on('initGamesList', (data) => {
        console.log('initGamesList');
        this.games = data;
        console.log(this.games);
        observer.next(this.games);
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

}