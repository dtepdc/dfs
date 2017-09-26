import { Component, OnInit } from '@angular/core';
import { OverUnderService } from './over-under.service';
import { Over } from './over-under.interface';
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrls: ['./over-under.component.css']
})

export class OverUnderComponent implements OnInit {
  over;

  constructor(private _http: OverUnderService) { }

  ngOnInit() {
    this._http.getOverUnder().subscribe(res => this.over = res);
  }

}
