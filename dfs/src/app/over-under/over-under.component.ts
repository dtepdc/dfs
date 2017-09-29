import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation } from '@angular/core';
// import { OverUnderService } from './over-under.service';
import { Over } from './over-under.interface';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrls: ['./over-under.component.css']
})

export class OverUnderComponent {
  displayedColumns = ['roadTeam', 'vegasLine', 'homeTeam', 'over.under'];
  dataSource = new OverUnderDataSource();
}

const data: Over[] = [{
    'roadTeam': 'LAR',
    'homeTeam': 'SF',
    'vegasLine': '2.0',
    'over': {
        'under': '40'
    },
    'date': 'Thursday',
    'time': '8:25 PM',
    'stadium': 'Levi’s stadium'
}, {
    'roadTeam': 'BAL',
    'homeTeam': 'JAC',
    'vegasLine': '4.0',
    'over': {
        'under': '39.5'
    },
    'date': 'Sunday',
    'time': '9:30 AM',
    'stadium': 'Wembley stadium'
}, {
    'roadTeam': 'ATL',
    'homeTeam': 'DET',
    'vegasLine': '3.0',
    'over': {
        'under': '50'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Ford Field'
}, {
    'roadTeam': 'CLE',
    'homeTeam': 'IND',
    'vegasLine': '1.0',
    'over': {
        'under': '40.5'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Lucas Oil stadium'
}, {
    'roadTeam': 'DEN',
    'homeTeam': 'BUF',
    'vegasLine': '3.0',
    'over': {
        'under': '40'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'New Era Field'
}, {
    'roadTeam': 'HOU',
    'homeTeam': 'NEP',
    'vegasLine': '-13.0',
    'over': {
        'under': '43.5'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Gillette stadium'
}, {
    'roadTeam': 'MIA',
    'homeTeam': 'NYJ',
    'vegasLine': '6.0',
    'over': {
        'under': '41.5'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'MetLife stadium'
}, {
    'roadTeam': 'NO',
    'homeTeam': 'CAR',
    'vegasLine': '-6.0',
    'over': {
        'under': '48'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Bank of America stadium'
}, {
    'roadTeam': 'NYG',
    'homeTeam': 'PHI',
    'vegasLine': '-5.0',
    'over': {
        'under': '44'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Lincoln Financial Field'
}, {
    'roadTeam': 'PIT',
    'homeTeam': 'CHI',
    'vegasLine': '7.5',
    'over': {
        'under': '45.5'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'Soldier Field'
}, {
    'roadTeam': 'TBB',
    'homeTeam': 'MIN',
    'vegasLine': 'TBD',
    'over': {
        'under': 'TBD'
    },
    'date': 'Sunday',
    'time': '1:00 PM',
    'stadium': 'U.S. Bank stadium'
}, {
    'roadTeam': 'SEA',
    'homeTeam': 'TEN',
    'vegasLine': '-2.5',
    'over': {
        'under': '43'
    },
    'date': 'Sunday',
    'time': '4:05 PM',
    'stadium': 'Nissan stadium'
}, {
    'roadTeam': 'CIN',
    'homeTeam': 'GBP',
    'vegasLine': '-9.0',
    'over': {
        'under': '45'
    },
    'date': 'Sunday',
    'time': '4:25 PM',
    'stadium': 'Lambeau Field'
}, {
    'roadTeam': 'KCC',
    'homeTeam': 'LAC',
    'vegasLine': '3.0',
    'over': {
        'under': '45.5'
    },
    'date': 'Sunday',
    'time': '4:25 PM',
    'stadium': 'StubHub Center'
}, {
    'roadTeam': 'OAK',
    'homeTeam': 'WAS',
    'vegasLine': '3.0',
    'over': {
        'under': '54'
    },
    'date': 'Sunday',
    'time': '8:30 PM',
    'stadium': 'FedEx Field'
}, {
    'roadTeam': 'DAL',
    'homeTeam': 'ARI',
    'vegasLine': '3.0',
    'over': {
        'under': '47'
    },
    'date': 'Monday',
    'time': '8:30 PM',
    'stadium': 'University of Phoenix stadium'
}];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class OverUnderDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Over[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

//   constructor(private _http: OverUnderService) {
//   }

//   ngOnInit() {
//     this._http.getOverUnder().subscribe(res => this.over = res);
//   }

// }
