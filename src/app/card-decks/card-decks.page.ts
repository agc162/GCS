import { CardDeck } from './../models/card-deck';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly mockupFile: string = './assets/data/carddecks.json';

  cardDecks: CardDeck [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    fetch(this.mockupFile)
      .then(res => res.json())
      .then(json => {
        this.cardDecks = json;
      });
  }

}
