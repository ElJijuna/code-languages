import { describe, it } from 'vitest';
import { solidity } from '../../src/languages/solidity';
import { expectValidLanguage } from '../language-contract';

describe('solidity', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(solidity, 'solidity');
  });
});
