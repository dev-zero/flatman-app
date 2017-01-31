import { Component, OnInit, OnDestroy, Pipe, PipeTransform, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { PeriodictableService } from './periodictable.service';

@Pipe({name: 'deltavalue'})
export class DeltavaluePipe implements PipeTransform {
    transform(value) {
      if (!!value)
        return value.toFixed(3);

      return "-";
    }
}

@Component({
  selector: 'periodictable',
  templateUrl: 'periodictable-list.component.html',
  styleUrls: ['periodictable-list.component.css'],
  providers: [PeriodictableService],
})

export class Periodictable implements OnInit, OnDestroy {
  
  elements = {
    'test': {},
    'methods': ['', ''],
    'summary': {'N': 0, 'avg': 0., 'stdev': 0.}
  };

  private _sub: any;

  errorMessage: string;

  methods: Object[];
  method1: string;
  method2: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _PeriodictableService: PeriodictableService) {}

  ngOnInit() {
    this.getMethodlist();
    this._sub = this._route.params.subscribe(params => {
      this.method1 = params['method1'];
      this.method2 = params['method2'];

      this.getPeriodictable(this.method1, this.method2);
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  getMethodlist() {
    this._PeriodictableService.getMethodlist().subscribe(
      methods => this.methods = methods,
      error => this.errorMessage = <any>error);
  };

  getPeriodictable(method1: string, method2: string) {
    this.elements.test = {}

    this._PeriodictableService.getPeriodictable(method1, method2).subscribe(
      elements => {
        this.elements['methods'][0] = this.method1;
        this.elements['methods'][1] = this.method2;
        for (var t in elements['test']) {
           this.elements['test'][t] = elements['test'][t][6];
        }
        this.elements['summary']['N'] = elements['summary']['N'];
        this.elements['summary']['avg'] = elements['summary']['avg'];
        this.elements['summary']['stdev'] = elements['summary']['stdev'];
      },
      error => this.errorMessage = <any>error,
    );
  }

  onSelect(method1: string, method2: string) {
    this._router.navigate(['/periodictable', method1, method2]);
  }
}
