
import { TestresultCollection } from './testresult-collection';

export interface DeltatestComparisonValues {
  element: string;
  collectionA: string;
  collectionB: string;
  testresultA: string;
  testresultB: string;
  value: number;
}

export interface DeltatestComparison {
  metric: string;
  testresult_collections: TestresultCollection[];
  elements: string[];
  values: DeltatestComparisonValues[];
}
