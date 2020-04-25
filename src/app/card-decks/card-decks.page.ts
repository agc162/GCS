import { CardDeck } from './../card/shared/card.model';
import { Component } from '@angular/core';
import { CardService } from 'src/app/card.service';


@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})

export class CardDecksPage {

  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  public cardDecks: CardDeck [] = [];

  constructor(private cardSrv: CardService) {
    this.getCardDecks();
  }

  private extractAllowedDecks( cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({name: deckName, types: cardDecks[deckName]});
    });
  }

  private getCardDecks() {
    this.cardSrv.getAllCardDecks().subscribe((cdSrv: CardDeck[]) => {
        this.extractAllowedDecks(cdSrv);
      });
  }

}