import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';



interface Civ {
  name: string;
  code: string;
}
interface Map {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  player1: string;
  player2: string;

  winsPlayer1: number;
  winsPlayer2: number;

  civs: Civ[];
  maps: Map[];

  counterForm: FormGroup;

  selectedCiv1Match1: Civ;
  selectedCiv2Match1: Civ;
  selectedCiv1Match2: Civ;
  selectedCiv2Match2: Civ;
  selectedCiv1Match3: Civ;
  selectedCiv2Match3: Civ;

  selectedMap1: Map;
  selectedMap2: Map;
  selectedMap3: Map;

  selectedWinnerMatch1: number;
  selectedWinnerMatch2: number;
  selectedWinnerMatch3: number;

  constructor(

  ) {
      this.civs = [
          {name: 'The English', code: 'EN'},
          {name: 'The French', code: 'FR'},
          {name: 'The Holy Roman Empire', code: 'RE'},
          {name: 'The Chinese', code: 'CI'},
          {name: 'The Rus', code: 'RU'},
          {name: 'The Abbasid Dynasty', code: 'AD'},
          {name: 'The Delhi Sultunate', code: 'DS'},
          {name: 'The Mongols', code: 'MO'}
      ];
      this.maps =[
        {name: 'map1', icon: '1'},
        {name: 'map2', icon: '2'},
        {name: 'map3', icon: '3'}
      ];
  }
  ngOnInit(): void {
    this.counterForm = new FormGroup({
      winsPlayer1: new FormControl(),
      winsPlayer2: new FormControl()
  });
  }

}
