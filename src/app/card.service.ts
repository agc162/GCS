import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardDeck } from 'src/app/card/shared/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  private readonly HS_API_URL = 'omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY = 'f379e825f5mshc656c6a27bda5c9p12b603jsn19352099911b';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidApi-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(
      this.HS_API_URL + 'info', { headers: this.headers }
    );
  }
}
