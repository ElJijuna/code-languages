import { describe, it } from 'vitest';
import { arduino } from '../../src/languages/arduino';
import { expectValidLanguage } from '../language-contract';

describe('arduino', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(arduino, 'arduino');
  });
});
