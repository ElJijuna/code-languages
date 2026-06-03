import { describe, it } from 'vitest';
import { openapi } from '../../src/languages/openapi';
import { expectValidLanguage } from '../language-contract';

describe('openapi', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(openapi, 'openapi');
  });
});
