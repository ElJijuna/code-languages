import { describe, it } from 'vitest';
import { angelscript } from '../../src/languages/angelscript';
import { expectValidLanguage } from '../language-contract';

describe('angelscript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(angelscript, 'angelscript');
  });
});
