import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { TestresultCollection } from '../testresult-collection';
import { TestresultService } from '../testresult.service';

import * as mendeleev from 'mendeleev';

@Component({
  selector: 'deltatest-report-list',
  templateUrl: './deltatest-report-list.component.html',
  styleUrls: ['./deltatest-report-list.component.css']
})
export class DeltatestReportListComponent implements OnChanges {
  @Input() collectionId;

  collection: TestresultCollection;
  totalNodehours: number;

  columns = [
    { name: 'Element', prop: 'data.element', comparator: this.elementComparator.bind(this) },
    { name: 'Status', prop: 'data.status' },
    { name: 'Min at V_0', prop: 'data.checks.min_at_V0' },
    { name: 'Used NH', prop: 'data.nodehours.current_total' }
  ]

  constructor(private _service: TestresultService) {
  }

  elementComparator(symbolA, symbolB) {
    // work around issue https://github.com/nickroberts404/Mendeleev/issues/1
    // by explicitly converting supposed to be numbers to actual numbers
    let elementA = mendeleev.PeriodicTable.getElement(symbolA);
    let elementB = mendeleev.PeriodicTable.getElement(symbolB);

    if (elementA.number > elementB.number)
      return 1;
    else if (elementA.number < elementB.number)
      return -1;

    return 0;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['collectionId'] && this.collectionId)
      this._service.getCollection(this.collectionId)
        .subscribe(collection => {
          this.collection = collection;
          this.generateStats();
        });
  }

  private generateStats() {
    if (!this.collection)
      return;

    this.totalNodehours = 0;

    for (let testresult of this.collection.testresults) {
      this.totalNodehours += testresult.data.nodehours.current_total;
    }
  }
}
