import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Task2 } from './task';

@Injectable()
export class Task2Service {
  private _headers: Headers;
  private _tasksUrl = '../api/v2/tasks';

  private _taskStatuses: string[];
  private _statusFilter: string;

  private _tasks: BehaviorSubject<Task2[]>;

  constructor(private _http: Http) {
    this._taskStatuses = [
      "new",
      "pending",
      "running",
      "done",
      "error",
      "deferred",
      "cancelled",
    ]
    this._statusFilter = "";

    this._tasks = new BehaviorSubject<Task2[]>([]);

    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');

    // fetch the tasks
    this._getTasks().subscribe(tasks => this._tasks.next(tasks));

    // create an observable polling the tasks and shovel them into the BehaviorSubject
    // The idea behind the usage of a BehaviorSubject as an intermediate compared to
    // directly return a (shared) Observable is to introduce things like server-side
    // filtering, filter-state sharing, caching, websocket client updates,
    // updating entries to full objects and caching this data
    Observable.interval(1000 * 60 * 5 /* ms */)
      .switchMap(() => this._getTasks())
      .subscribe(tasks => this._tasks.next(tasks));
  }

  private _getTasks() {
    let params: URLSearchParams = new URLSearchParams();

    if (this._statusFilter != "")
      params.set('status', this._statusFilter);

    return this._http.get(this._tasksUrl, {headers: this._headers, search: params})
      .map(response => response.json() as Task2[])
      .catch(this.handleError);
  }

  public getStatuses(): Observable<string[]> {
    return Observable.of(this._taskStatuses);
  }

  public getTask(id: string) : Observable<Task2> {
    return this._http.get(this._tasksUrl + '/' + id, {headers: this._headers})
      .map(response => response.json() as Task2)
      .catch(this.handleError);
  }

  public getTasks() {
    return this._tasks.asObservable();
  }

  public filterByStatus(filter: string) {
    // invalid or empty filters reset the status filter
    if (this._taskStatuses.indexOf(filter) < 0)
      filter = "";

    // if  the filter is set again, ignore it
    if (filter == this._statusFilter)
      return;

    this._statusFilter = filter;

    // fetch right now
    this._getTasks().subscribe(tasks => this._tasks.next(tasks));
  }

  public getStatusFilter() {
    return this._statusFilter;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
//  vim: set ts=2 sw=2 tw=0 :
