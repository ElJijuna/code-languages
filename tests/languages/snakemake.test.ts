import { describe, it } from 'vitest';
import { snakemake } from '../../src/languages/snakemake';
import { expectValidLanguage } from '../language-contract';

describe('snakemake', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(snakemake, 'snakemake');
  });
});
