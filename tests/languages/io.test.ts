import { describe, it } from 'vitest';
import { io } from '../../src/languages/io';
import { expectValidLanguage } from '../language-contract';

describe('io', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(io, 'io');
  });
});
