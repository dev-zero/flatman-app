
import { Routes, RouterModule } from '@angular/router';

import { Home }                       from './home/home';
import { MachineStatus }              from './machinestatus/machinestatus-list.component';
import { Reports }                    from './reports/reports-list.component';
import { ReportsComparison }          from './reports/reports-comparison.component';
import { ReportsElementComparison }   from './reports/reports-elementcomparison.component';
import { Periodictable }              from './periodictable/periodictable-list.component';
import { Details }                    from './details/details-list.component';
import { MethodList }                 from './methods/methods-list.component';
import { PseudoFamilyList }           from './pseudos/pseudofamily-list.component';
import { DeltatestResultsComponent }  from './deltatest/results.component';
import { Task2ListComponent }         from './task2/task-list.component';
import { CalculationListComponent }   from './calculation/list.component';
import { CalculationDetailComponent } from './calculation/detail.component';

const appRoutes: Routes = [
  { path: '',                                      redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',                                  component : Home },
  { path: 'reports/comparison/:id1/:id2',          component : ReportsComparison },
  { path: 'reports/elementcomparison/:id1/:test1', component : ReportsElementComparison },
  { path: 'reports',                               component : Reports },
  { path: 'machinestatus',                         component : MachineStatus },
  { path: 'periodictable/:method1/:method2',       component : Periodictable },
  { path: 'periodictable/',                        component : Home },
  { path: 'details/',                              component : Home },
  { path: 'details/:test1',                        component : Details },
  { path: 'methodlist',                            component : MethodList },
  { path: 'pseudos',                               component : PseudoFamilyList },
  { path: 'pseudos/:family',                       component : PseudoFamilyList },
  { path: 'deltatest/results',                     component : DeltatestResultsComponent },
  { path: 'tasks',                                 component : Task2ListComponent },
  { path: 'calculations',                          component : CalculationListComponent },
  { path: 'calculations/:id',                      component : CalculationDetailComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

//  vim: set ts=2 sw=2 tw=0 :
