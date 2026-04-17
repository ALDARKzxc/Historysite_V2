/**
 * HOW TO INTEGRATE THE LANGUAGE SYSTEM
 * =====================================
 *
 * STEP 1 — Wrap your App with LanguageProvider
 * ---------------------------------------------
 * In your main.tsx or App.tsx:
 *
 *   import { LanguageProvider } from './contexts/LanguageContext';
 *
 *   root.render(
 *     <LanguageProvider>
 *       <App />
 *     </LanguageProvider>
 *   );
 *
 *
 * STEP 2 — Add LanguageSwitcher to your Navbar
 * ---------------------------------------------
 *   import LanguageSwitcher from './components/LanguageSwitcher';
 *
 *   // Inside your navbar JSX:
 *   <LanguageSwitcher variant="navbar" />
 *
 *
 * STEP 3 — Use t() to translate any UI text
 * -----------------------------------------
 *   import { useLanguage } from './contexts/LanguageContext';
 *
 *   const MyComponent = () => {
 *     const { t } = useLanguage();
 *     return <h1>{t('hero_title')}</h1>;
 *   };
 *
 *
 * STEP 4 — Display articles with Russian subtitles
 * ------------------------------------------------
 * Option A — Structured (recommended for full control):
 *
 *   import { ArticleContent } from './components/ArticleContent';
 *   import { RussianSubtitlesBadge } from './components/ArticleContent';
 *
 *   <RussianSubtitlesBadge />
 *   <ArticleContent
 *     paragraphs={[
 *       {
 *         sentences: [
 *           {
 *             text: "Peter the Great was born in 1672.",
 *             textRu: "Пётр Великий родился в 1672 году."
 *           },
 *           {
 *             text: "He became tsar at the age of ten.",
 *             textRu: "Он стал царём в возрасте десяти лет."
 *           }
 *         ]
 *       }
 *     ]}
 *   />
 *
 *
 * Option B — Simple (if you have two full text strings):
 *
 *   import { SimpleArticleContent } from './components/ArticleContent';
 *
 *   <SimpleArticleContent
 *     text={article.textEn}   // or article.textAr / article.textZh
 *     textRu={article.textRu}
 *   />
 *
 *
 * STEP 5 — Handle RTL for Arabic
 * --------------------------------
 * The LanguageProvider automatically sets document.dir = 'rtl' for Arabic.
 * In your Tailwind config, make sure you have:
 *   plugins: [require('tailwindcss-animate')],
 *
 * Add this to your global CSS for RTL support:
 *   [dir="rtl"] .rtl\:text-right { text-align: right; }
 *
 * Or use Tailwind RTL variants: className="ltr:ml-4 rtl:mr-4"
 *
 *
 * AVAILABLE TRANSLATION KEYS
 * --------------------------
 * See src/contexts/LanguageContext.tsx → Translations interface
 * for the full list of all ~80 keys.
 *
 * Categories:
 *   nav_*         Navigation items
 *   hero_*        Hero section
 *   epoch_*       Historical epoch names
 *   topics_*      Topics/catalog page
 *   article_*     Article page UI
 *   quiz_*        Quiz/test UI
 *   progress_*    XP / gamification
 *   auth_*        Login / register
 *   about_*       About page
 *   timeline_*    Timeline page
 *   ui_*          Generic UI elements
 *   footer_*      Footer
 *   lang_*        Language names
 */

// Example App.tsx wrapper
export const exampleAppTsx = `
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}
`;

// Example Navbar with language switcher
export const exampleNavbar = `
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-900">
      <Logo />
      <div className="flex items-center gap-6">
        <NavLink to="/">{t('nav_home')}</NavLink>
        <NavLink to="/timeline">{t('nav_timeline')}</NavLink>
        <NavLink to="/topics">{t('nav_topics')}</NavLink>
        <NavLink to="/about">{t('nav_about')}</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitcher variant="navbar" />
        <AuthButtons />
      </div>
    </nav>
  );
};
`;

export default {};
