import { Component, OnInit } from '@angular/core';
import { GamedataService, Games, Categories, Questions } from './gamedata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  games: Array<Games> = [];
  gameID: number = -1;
  actualGame: Games;
  actualCategories: Categories;
  constructor(private gamedataService: GamedataService) {

  }

  ngOnInit() {
    this.title = 'title is changed from ' + this.title + ' to this! :-)';
    
    this.gamedataService.getGames().subscribe(games => {
      console.log("games:");
      games.forEach(game => {
        console.log(game);
        this.games.push(game);
      });
    });
  }

  clickThis() {
    console.log('clickThis');
    //this.gamedataService.games.next();
  }

  setRound(round: number) {
    console.log(round);
    this.gameID = round;

    this.games.forEach(game => {
      console.log(game);
      if (game._id == this.gameID){
        console.log("hier?");
        this.actualCategories = game.categories;
      }
    });
    console.log(this.actualCategories);
  }
}
