import { describe, it } from 'vitest';
import { jupyterNotebook } from '../../src/languages/jupyter-notebook';
import { expectValidLanguage } from '../language-contract';

describe('jupyter-notebook', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(jupyterNotebook, 'jupyter-notebook');
  });
});
