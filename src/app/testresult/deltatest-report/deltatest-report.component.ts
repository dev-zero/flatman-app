import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { TestresultCollection } from '../testresult-collection';
import { TestresultService } from '../testresult.service';

@Component({
  selector: 'app-deltatest-report',
  templateUrl: './deltatest-report.component.html',
  styleUrls: ['./deltatest-report.component.css']
})
export class DeltatestReportComponent {
  private collections: Observable<TestresultCollection[]>;
  private selectedCollectionId: string = "";

  constructor(private _service: TestresultService) {
    this.collections = _service.getCollections();
  }

  selectCollection(id: string) {
    this.selectedCollectionId = id;
  }
}
