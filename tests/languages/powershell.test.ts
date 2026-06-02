import { describe, it } from 'vitest';
import { powershell } from '../../src/languages/powershell';
import { expectValidLanguage } from '../language-contract';

describe('powershell', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(powershell, 'powershell');
  });
});
