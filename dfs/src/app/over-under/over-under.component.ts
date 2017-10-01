import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { OverUnderService } from './over-under.service';
import { Over } from './over-under.interface';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrls: ['./over-under.component.css']
})

export class OverUnderComponent implements OnInit {
  over;
  selectedAll;

  constructor(private _http: OverUnderService) { }

  ngOnInit() {
    this._http.getOverUnder().subscribe(res => this.over = res);
  }

  selectAll() {
    for (let i = 0; i < this.over.length; i++) {
      this.over[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.over.every(function(item: any) {
        return item.selected === true;
      });
  }
}
