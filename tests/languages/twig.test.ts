import { describe, it } from 'vitest';
import { twig } from '../../src/languages/twig';
import { expectValidLanguage } from '../language-contract';

describe('twig', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(twig, 'twig');
  });
});
