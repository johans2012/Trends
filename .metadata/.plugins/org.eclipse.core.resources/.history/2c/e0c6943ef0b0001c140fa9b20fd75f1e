import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player(0, "", "", "", 0);
  submitted = false;

  playerSaveForm = new FormGroup({

    id: new FormControl(),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    power: new FormControl('', [Validators.required]),
    shield: new FormControl('', [Validators.required]),
    life: new FormControl('', [Validators.required]),
  });

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.submitted = false;
  }

  get id() {
    return this.playerSaveForm.get('id');
  }

  get username() {
    return this.playerSaveForm.get('username');
  }

  get power() {
    return this.playerSaveForm.get('power');
  }

  get shield() {
    return this.playerSaveForm.get('shield');
  }

  get life() {
    return this.playerSaveForm.get('life');
  }

  savePlayer(savePlayer) {
    this.player = new Player(0, "", "", "", 0);
    this.player.id = this.id.value;
    this.player.username = this.username.value;
    this.player.power = this.power.value;
    this.player.shield = this.power.value;
    this.player.life = this.life.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.playerService.createPlayer(this.player)
      .subscribe(data => console.log(data), error => console.log(error));
    this.player = new Player(0, "", "", "", 0);
  }

  addPlayerForm() {
    this.submitted = false;
    this.playerSaveForm.reset();
  }


}





