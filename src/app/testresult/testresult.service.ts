import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { TestresultCollection } from './testresult-collection';

@Injectable()
export class TestresultService {
  private _headers: Headers;
  private _collectionUrl = "../api/v2/testresultcollections";

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

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
