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
  selectedCDs: string[] = [];
  selectedCs: string[] = [];

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


  select(name: string) {
    const esta = this.selectedCDs.indexOf(name);

    if (esta === -1) {
      this.selectedCDs.push(name);
      this.showCards(name);
    } else {
      this.selectedCDs.splice(esta, 1);
      this.selectedCs = [];
    }
  }

  showCards(name: string) {
    for (const cardDeck of this.cardDecks) {
      if (cardDeck.name === name) {
        this.selectedCs = cardDeck.cards;
      }
    }
  }

}
