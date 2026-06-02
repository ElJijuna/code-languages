import { describe, it } from 'vitest';
import { qsharp } from '../../src/languages/qsharp';
import { expectValidLanguage } from '../language-contract';

describe('qsharp', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(qsharp, 'qsharp');
  });
});
