import { Component, OnInit } from '@angular/core';
import { OverUnderService } from './over-under.service';
import { Over } from './over-under.interface';
import { MatTableModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrls: ['./over-under.component.css']
})

export class OverUnderComponent implements OnInit {
  over;
  columnDefs;
  myRowData;
  gridOptions;

  constructor(private _http: OverUnderService) {
    this.gridOptions = {
            rowData: this.myRowData,
            columnDefs: this.columnDefs,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true
        };
  }

  ngOnInit() { this.columnDefs = [
        { headerName: 'Home Team', field: 'homeTeam', width: 200 },
        { headerName: 'Vegas', field: 'vegasLine', width: 180},
        { headerName: 'Road Team', field: 'roadTeam', width: 160},
        { headerName: 'Over/Under', field: 'over.under', width: 300}
    ];
  }
}
