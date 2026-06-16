import { describe, it } from 'vitest';
import { gcode } from '../../src/languages/gcode';
import { expectValidLanguage } from '../language-contract';

describe('gcode', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(gcode, 'gcode');
  });
});
