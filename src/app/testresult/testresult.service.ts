import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { TestresultCollection } from './testresult-collection';
import { DeltatestComparison } from './deltatest-comparison';

@Injectable()
export class TestresultService {
  private _headers: Headers;
  private _collectionUrl = "../api/v2/testresultcollections";
  private _comparisonUrl = "../api/v2/comparisons";

  constructor(private _http: Http) {
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  getCollections(): Observable<TestresultCollection[]> {
    return this._http.get(this._collectionUrl, {headers: this._headers})
      .map(response => response.json() as TestresultCollection[])
      .catch(this.handleError);
  }

  getCollection(collectionId: string): Observable<TestresultCollection> {
    return this._http.get(this._collectionUrl + `/${collectionId}`, {headers: this._headers})
      .map(response => response.json() as TestresultCollection)
      .catch(this.handleError);
  }

  getDeltatestComparison(collectionIds: string[]): Observable<DeltatestComparison> {
    return this._http.post(this._comparisonUrl,
                           JSON.stringify({ metric: "deltatest", testresult_collections: collectionIds }),
                           {headers: this._headers})
      .map(response => response.json() as DeltatestComparison[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
