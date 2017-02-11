import {Injectable} from '@angular/core';
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

	private url = 'ws://localhost:3000';  
  private socket;
  
  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  
  getGames() {
    let observable = new Observable<Games[]>(observer => {
      console.log("Connecting socket...");
      this.socket = io(this.url);
      this.socket.on('initGamesList', (data) => {
        console.log('initGamesList');
        this.games = JSON.parse(data);
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