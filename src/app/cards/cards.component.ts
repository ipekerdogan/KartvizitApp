import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardModalComponent} from "./card-modal/card-modal.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  cardItem = {
    title: 'Frontendci',
    name: 'İpek Erdoğan',
    phone: '0577 777 77 77',
    email: 'info@ipekerdogan.com.tr',
    address: 'Eryaman, ANKARA'
  };

  constructor(
    public dialog : MatDialog
  ) {

  }

  ngOnInit(): void {

  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent, {
      width: "400px"
    });
  }
}
