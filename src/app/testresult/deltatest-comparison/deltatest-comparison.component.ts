import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { TestresultCollection } from '../testresult-collection';
import { TestresultService } from '../testresult.service';

@Component({
  selector: 'app-deltatest-comparison',
  templateUrl: './deltatest-comparison.component.html',
  styleUrls: ['./deltatest-comparison.component.css']
})
export class DeltatestComparisonComponent {
  private collections: Observable<TestresultCollection[]>;
  private selectedCollectionIds: string[] = [];

  constructor(private _service: TestresultService) {
    this.collections = _service.getCollections();
  }

  toggleCollectionSelection(id: string) {
    let idx = this.selectedCollectionIds.indexOf(id);

    if (idx > -1)
      this.selectedCollectionIds.splice(idx, 1);
    else
      this.selectedCollectionIds.push(id);

    // workaround the "issue" that angular does not detect changes inside arrays:
    this.selectedCollectionIds = this.selectedCollectionIds.slice();
  }
}
