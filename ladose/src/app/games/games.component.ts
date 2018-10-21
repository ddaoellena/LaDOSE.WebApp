import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Game } from '../models/model'
import { GameService } from '../services/game.service';
@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Game[] = [];
  constructor(private gameService : GameService){

  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','imgUrl'];

  ngOnInit() {
    this.gameService.getAll().subscribe(d=>{
      this.dataSource =d;
    });
    
  }
}
