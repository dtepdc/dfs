import { Component, OnInit } from '@angular/core';
import { OverUnderService } from './over-under.service';
import { Stats } from './over-under.interface';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrls: ['./over-under.component.css']
})

export class OverUnderComponent implements OnInit {
  stats;
  selectedAll;
  columns;

  constructor(private _http: OverUnderService) { }

  ngOnInit() {
    this._http.getOverUnder().subscribe(res => this.stats = res);
  }

  sortTable(prop: string) {
    this.columns = this.columns * (-1); // change order
    return false; // do not reload
  }

  selectAll() {
    for (let i = 0; i < this.stats.length; i++) {
      this.stats[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.stats.every(function(item: any) {
        return item.selected === true;
      });
  }
}
