import { describe, it } from 'vitest';
import { ada } from '../../src/languages/ada';
import { expectValidLanguage } from '../language-contract';

describe('ada', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ada, 'ada');
  });
});
