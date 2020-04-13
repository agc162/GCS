import { CardDeck } from './../models/card-deck';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {

  @Input() myCardDeck: CardDeck;

  constructor() { }

  ngOnInit() {}

}
