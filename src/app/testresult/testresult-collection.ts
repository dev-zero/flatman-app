
import { Testresult } from './testresult';

export interface TestresultCollection {
  id: string;
  name: string;
  desc: string;
  testresult_count: number;
  testresults?: Testresult[];
}
