import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { WebsocketService } from './websocket.service';
import 'rxjs/add/operator/map';

export interface Games {
	name: string,
	categories: Categories,
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

  public games: Subject<Games>  = new Subject<Games>();

	constructor(private wsService: WebsocketService) {

    this.games = <Subject<Games>>this.wsService
      .connect()
      .map((response: MessageEvent): Games => {
				let data = JSON.parse(response.data);
				return {
          name : data.name,
					categories: data.categories
				}
			});

  }

}