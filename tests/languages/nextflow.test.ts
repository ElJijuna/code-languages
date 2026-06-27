import { describe, it } from 'vitest';
import { nextflow } from '../../src/languages/nextflow';
import { expectValidLanguage } from '../language-contract';

describe('nextflow', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(nextflow, 'nextflow');
  });
});
