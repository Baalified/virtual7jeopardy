import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from "rxjs/Observer";

@Injectable()
export class WebsocketService {

  private subject: Subject<MessageEvent>;
	private subjectData: Subject<number>;

  private url: string = 'ws://localhost:3000'; 

  constructor() { }

  public connect(): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(this.url);
		}
		return this.subject;
	}

  private create(url: string): Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror   = obs.error.bind(obs);
				ws.onclose   = obs.complete.bind(obs);
			console.log('bla bla'+ws.readyState);
        return ws.close.bind(ws);
			});

		let observer = {
			next: (data: Object) => {
        console.log('hier?'+ws.readyState);
				if (ws.readyState === WebSocket.OPEN) {
					console.log('open'+ws.readyState);
          ws.send(JSON.stringify(data));
				}
        if (ws.readyState === WebSocket.CLOSED) {
          console.log('closed'+ws.readyState);
        }
        if (ws.readyState === WebSocket.CONNECTING) {
          console.log('CONNECTING'+ws.readyState);
        }
			}
		};

		return Subject.create(observer, observable);
	}

}
