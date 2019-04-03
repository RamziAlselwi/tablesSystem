import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  width: string;
  right: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );


  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', width: 'calc(((23% - 0.75px) + 1px) * 3) !important', right: 'calc(((22% - 0.75px) + 1px) * 3);'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', width: 'calc(((25% - 0.75px) + 1px) * 3) !important', right: 'calc(((22% - 0.75px) + 1px) * 3);'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', width: 'calc(((25% - 0.75px) + 1px) * 3) !important', right: 'calc(((22% - 0.75px) + 1px) * 3);'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', width: 'calc(((25% - 0.75px) + 1px) * 3) !important', right: 'calc(((22% - 0.75px) + 1px) * 3);'},
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
