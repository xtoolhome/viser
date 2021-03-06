import { Component, Input } from '@angular/core';
import { Chart } from '../Chart';

@Component({
  selector: 'View',
  template: `<div #chartDom></div>`,
})
class View extends Chart {
  @Input() data?: any;
  @Input() dataPre?: {
    connector?: string;
    source?: any;
    transform?: object[] | object;
  };
  @Input() scale?: object[];
  @Input() dataView?: string;
}

@Component({
  selector: 'FacetView',
  template: `<div #chartDom></div>`,
})
class FacetView extends Chart {
  @Input() dataPre?: {
    connector?: string;
    source?: any;
    transform?: object[] | object;
  };
  @Input() dataView?: string;
}

export { View, FacetView };
