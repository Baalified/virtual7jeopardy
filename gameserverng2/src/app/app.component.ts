import { Component, OnInit } from '@angular/core';
import { GamedataService, Games } from './gamedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  games = [];
  constructor(private gamedataService: GamedataService) {

  }

  ngOnInit() {
    this.title = 'title is changed from ' + this.title + ' to this! :-)';

    this.gamedataService.getGames().subscribe(games => {
      console.log(games);
      this.games.push(games);
    });
  }
  clickThis() {
    console.log('clickThis');
    this.gamedataService.games.next();
  }

    
}
