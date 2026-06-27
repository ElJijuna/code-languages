import { describe, it } from 'vitest';
import { modelica } from '../../src/languages/modelica';
import { expectValidLanguage } from '../language-contract';

describe('modelica', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(modelica, 'modelica');
  });
});
