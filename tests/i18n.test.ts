import { describe, expect, it } from 'vitest';
import { localizeLanguage, typescript } from '../src';

describe('localizeLanguage', () => {
  it('resolves exact, base, and English fallback locales', () => {
    expect(localizeLanguage(typescript, 'es').resolvedLocale).toBe('es');
    expect(localizeLanguage(typescript, 'ES-pe').resolvedLocale).toBe('es');
    expect(localizeLanguage(typescript, 'ja-JP').resolvedLocale).toBe('en');
    expect(localizeLanguage(typescript).resolvedLocale).toBe('en');
  });

  it('falls back to English for locales that match Object.prototype members', () => {
    for (const locale of ['constructor', '__proto__', 'constructor-US']) {
      const localized = localizeLanguage(typescript, locale);

      expect(localized.resolvedLocale).toBe('en');
      expect(localized.locale).toBe(locale);
      expect(localized.name).toBe('TypeScript');
      expect(localized.description).toBe(typescript.i18n.en.description);
    }
  });
});
