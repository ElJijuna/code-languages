import { describe, it } from 'vitest';
import { nunjucks } from '../../src/languages/nunjucks';
import { expectValidLanguage } from '../language-contract';

describe('nunjucks', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(nunjucks, 'nunjucks');
  });
});
