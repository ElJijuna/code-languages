import { describe, it } from 'vitest';
import { yaml } from '../../src/languages/yaml';
import { expectValidLanguage } from '../language-contract';

describe('yaml', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(yaml, 'yaml');
  });
});
