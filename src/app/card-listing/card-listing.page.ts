import { Card } from 'src/app/card/shared/card';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  CardDeckGroup: string;
  CardDeck: string;
  public cards: Card [] = [];

  constructor(private activedRoute: ActivatedRoute, private cardService: CardService ) { }

  ionViewWillEnter() {
    this.CardDeckGroup = this.activedRoute.snapshot.paramMap.get('CardDeckGroup');
    this.CardDeck = this.activedRoute.snapshot.paramMap.get('CardDeck');

    this.cardService.getCardByDeck(this.CardDeckGroup, this.CardDeck).subscribe(
      (cdSrv: Card[]) => {
        this.cards = cdSrv;
      });
  }
}
