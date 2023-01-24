import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardModalComponent} from "./card-modal/card-modal.component";
import {Card} from "../models/card";
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  cards!: Card[];
  constructor(
    public dialog : MatDialog,
    private cardService: CardService
  ) {

  }

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(){
    const dialog = this.dialog.open(CardModalComponent, {
      width: "400px"
    });

    dialog.afterClosed().subscribe( res => {
      if (res) {
        this.getCards();
      }
    });
  }

  getCards() {
    this.cardService.getCards()
      .subscribe((res: Card[]) => {
        this.cards = res;
      });
  }
}
