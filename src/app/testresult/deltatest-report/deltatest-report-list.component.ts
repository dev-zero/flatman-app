import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { TestresultCollection } from '../testresult-collection';
import { TestresultService } from '../testresult.service';

@Component({
  selector: 'deltatest-report-list',
  templateUrl: './deltatest-report-list.component.html',
  styleUrls: ['./deltatest-report-list.component.css']
})
export class DeltatestReportListComponent implements OnChanges {
  @Input() collectionId;

  collection: TestresultCollection;

  constructor(private _service: TestresultService) {
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['collectionId'] && this.collectionId)
      this._service.getCollection(this.collectionId)
        .subscribe(collection => this.collection = collection);
  }
}
