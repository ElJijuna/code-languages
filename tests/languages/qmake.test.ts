import { describe, it } from 'vitest';
import { qmake } from '../../src/languages/qmake';
import { expectValidLanguage } from '../language-contract';

describe('qmake', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(qmake, 'qmake');
  });
});
