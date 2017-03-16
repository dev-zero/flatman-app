import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input() treeData: any[];

  getType(val) {
    if (val instanceof Array) {
      if (val.length)
        return 'list';

      return 'empty';
    }

    if (typeof val == 'object')
      return 'object';

    return '';
  }
}
