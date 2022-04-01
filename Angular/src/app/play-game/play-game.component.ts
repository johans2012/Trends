import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GroupService } from '../group.service';
import { Group } from '../group';
import { Player } from '../player';
import { Game } from '../game';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
})
export class PlayGameComponent implements OnInit {
  groups: Observable<Group[]>;

  dtTrigger: Subject<any> = new Subject();
  groupList: any;
  deleteMessage = false;
  dtOptions: DataTables.Settings = {};

  public jugadores: Observable<Player[]>;//Refactor


  /**
   * @abstract
   *          Abstraccion de los datos jugador, y  los Asistentes de la partida
   * ***/
  public  playerI: Player = new Player(0, "", "", "", 0);
  public playerII: Player = new Player(0, "", "", "", 0);
  public players: Player[] = [];//Refactor

  public game: Game = new Game();

  /***
   *   @abstract
   *            Numero de jugadores de l partida.  
   * 
  */
  protected cntPlyers: number;

  playerUpdateForm = new FormGroup({
    id: new FormControl(),
    groupId: new FormControl(),
    username: new FormControl()
  });

  constructor(
    private playerService: PlayerService,

    private groupService: GroupService
  ) { }

  ngOnInit() {

    this.groupService.getGroupList().subscribe((data) => {
      this.groups = data;
    });

    /***TODO get player from service***/
    this.playerService.getPlayerList().subscribe((data) => {
      this.jugadores = data;
    });


    for (let i = 0; i < this.players.length; i++) {
      this.players[i] = this.jugadores[i];
    }

    this.cntPlyers = 0;
  }

  addPlayer() {
    console.log('push addPlayer method adding...');
	    

    if (this.players.length === 2) {

      alert("Solo puede crear dos jugadores por partida");
    } else {

      let username = prompt("Digite el nombre del jugador");

      /**  TODO read players from DB ****/
      this.playerService.getPlayerList().subscribe((data) => {
        this.jugadores = data;
      });

      this.players.push(new Player(length, "" + username, "ball attack", "shield", 10));

      this.playerI = this.players[0];
      this.playerII = this.players[1];

      /*** Update global data ***/
      this.cntPlyers = this.players.length;

      this.players.forEach(element => {
        console.log(element.id);
        console.log(element.username);
        console.log(element.power);
        console.log(element.shield);
        console.log(element.life);
      });
    }
  }

  viewData() {
    return this.players.toLocaleString;
  }

  deletePlayer() {
    console.log('push delete player method erasing... ');

    length = this.players.length;
    console.log(length);
    try {

      this.players.pop();
      alert("Delete player");

      console.log(length);
      if (this.players.length <= 0) {
        alert("The list players is empty");
      }

    } catch (err) {
      err.printStackTrace();
    }
  }

  get username() {
    return this.playerUpdateForm.get('username');
  }

  public getGroup(player: Player) {
    this.groupService.getGroup(player.id).subscribe((data) => {
      this.groupList = data;
    });
    return this.groupList.groupNumber;
  }

  get id() {
    return this.playerUpdateForm.get('Id');
  }

  get GroupId() {
    return this.playerUpdateForm.get('groupId');
  }

  protected main(/** player1: Player, player2: Player**/) {

    /** genera solo numeros negativos**/

    let inputUser2 = 0;
    let inputUser1 = 0;


    let battles = 0;

    while (battles < 2) {

      inputUser1 = this.playerI.run(inputUser2);
      inputUser2 = this.playerII.run(inputUser1);

      this.currentGame(this.playerI.getLife(), this.playerII.getLife());

      if (inputUser1 === 0) {
        console.log("player 1 lose");
      }

      if (inputUser2 === 0) {
        console.log("player 2 lose");
      }

      battles++;
    }

  }

  public restart() {

    this.log("restart method exe");


    alert("Restart game");
    this.playerI.life = 10;
    this.playerII.life = 10;
    this.cntPlyers = 0;
    this.players = null;

    return 1;
  }

  public playGame() {

    let currentPlayers: Player[] = [];


    for (let i = 0; i < this.players.length; i++) {
      currentPlayers[i] = this.players[i];
    }

    let execute = false;

    if (currentPlayers.length === 0) {

      this.addPlayer();

    } else {
      do {

        this.main();

        execute = confirm("Do you like continue the battle?");

      } while (execute);
    }

  }

  public currentGame(lifeA: number, lifeB: number) {

    if (lifeA == null) {
      lifeA = 0;
    } else {
      lifeA = this.playerI.life;
    }

    if (lifeB == null) {
      lifeB = 0;
    } else {
      lifeB = this.playerII.life;
    }

    return "Player 1 life: " + lifeA + "<br><div>Player 2 life: </div>" + lifeB;
  }

  protected currentMoment() {

    let today = new Date();
    let time = today.getHours + ":" + today.getMinutes() + ":" + today.getSeconds();

    return time;
  }

  protected log(message: string) {
    let time = this.currentMoment();
    console.log(message);
    console.log("Time: " + time);
  }

}

