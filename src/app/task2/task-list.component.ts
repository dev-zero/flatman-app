import { Component, OnInit } from '@angular/core';

import { Observable }   from 'rxjs/Observable';

import { Task2 }        from './task';
import { Task2Service } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class Task2ListComponent implements OnInit {
  tasks: Observable<Task2[]>;
  statuses: Observable<string[]>;
  statusFilter: string;

  private _service: Task2Service;

  getTaskId(task: Task2) {
    return task.id;
  }

  constructor(_service: Task2Service) {
    this._service = _service;

    this.tasks = _service.getTasks();
    this.statuses = _service.getStatuses();
    this.statusFilter = _service.getStatusFilter();
  }

  ngOnInit() {
  }

  setStatusFilter(filter: string) {
    this._service.filterByStatus(filter);
  }
}
