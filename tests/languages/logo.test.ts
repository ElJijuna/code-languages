import { describe, it } from 'vitest';
import { logo } from '../../src/languages/logo';
import { expectValidLanguage } from '../language-contract';

describe('logo', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(logo, 'logo');
  });
});
