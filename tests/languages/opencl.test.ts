import { describe, it } from 'vitest';
import { opencl } from '../../src/languages/opencl';
import { expectValidLanguage } from '../language-contract';

describe('opencl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(opencl, 'opencl');
  });
});
