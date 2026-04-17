/**
 * Convenience re-export of the language hook.
 * Use this in any component to get translations.
 *
 * Example:
 *   import { useT } from '../hooks/useTranslation';
 *   const { t, language, setLanguage, isRTL, showRussianSubtitles } = useT();
 *   <h1>{t('hero_title')}</h1>
 */
export { useLanguage as useT } from "../contexts/LanguageContext";
export type { Language, Translations } from "../contexts/LanguageContext";
