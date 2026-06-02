import { bench, describe } from 'vitest';
import { api } from '../src';

describe('api', () => {
  bench('api.language get localized', () => {
    api.language('typescript').locale('es-PE').get();
  });

  bench('api.detect get localized', () => {
    api.detect('src/App.vue').locale('es').get();
  });

  bench('api.detectAll ambiguous extension', () => {
    api.detectAll('include/config.h').locale('en-US').get();
  });

  bench('api.language load cached module', async () => {
    await api.language('typescript').locale('es-PE').load();
  });
});
