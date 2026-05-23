import React from "react";
import { useLanguage } from "./LanguageContext";

/**
 * A single paragraph rendered with optional Russian subtitle below each sentence.
 * When the interface language is NOT Russian, each sentence gets a grey Russian
 * subtitle directly underneath — the core feature of the platform.
 */

interface BilingualSentence {
  text: string;       // Text in the selected language
  textRu: string;     // Russian original
}

interface BilingualParagraph {
  sentences: BilingualSentence[];
}

interface ArticleContentProps {
  /**
   * Structured bilingual content — array of paragraphs, each containing sentences.
   * Both the main text and the Russian version are provided for every sentence.
   */
  paragraphs: BilingualParagraph[];
  className?: string;
}

/**
 * Renders article content with Russian subtitles.
 *
 * Usage:
 * <ArticleContent
 *   paragraphs={[
 *     {
 *       sentences: [
 *         { text: "Peter the Great was born in 1672.", textRu: "Пётр Великий родился в 1672 году." },
 *         { text: "He became tsar at the age of ten.", textRu: "Он стал царём в возрасте десяти лет." }
 *       ]
 *     }
 *   ]}
 * />
 */
export const ArticleContent: React.FC<ArticleContentProps> = ({
  paragraphs,
  className = "",
}) => {
  const { showRussianSubtitles, language } = useLanguage();

  return (
    <div className={`article-content ${className}`}>
      {paragraphs.map((paragraph, pi) => (
        <p key={pi} className="mb-6 leading-relaxed">
          {paragraph.sentences.map((sentence, si) => (
            <span key={si} className="inline">
              {/* Main sentence in selected language */}
              <span
                className="text-gray-800 text-base leading-7"
                lang={language}
              >
                {sentence.text}{" "}
              </span>

              {/* Russian subtitle — only shown when interface is NOT in Russian */}
              {showRussianSubtitles && (
                <span
                  className="
                    block text-sm text-gray-400 font-light
                    mt-0.5 mb-2 leading-5
                    border-l-2 border-gray-200 pl-3
                    italic
                  "
                  lang="ru"
                  aria-label="Russian original"
                >
                  {sentence.textRu}
                </span>
              )}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

/**
 * Simpler version: takes plain text strings and splits into sentences automatically.
 * Useful for articles where you have two full text strings (translated + Russian).
 */
interface SimpleArticleContentProps {
  /** The article text in the currently selected language */
  text: string;
  /** The same article text in Russian (for subtitle display) */
  textRu: string;
  className?: string;
}

export const SimpleArticleContent: React.FC<SimpleArticleContentProps> = ({
  text,
  textRu,
  className = "",
}) => {
  const { showRussianSubtitles, language } = useLanguage();

  // Split text into paragraphs
  const paragraphs = text.split(/\n+/).filter(Boolean);
  const ruParagraphs = textRu.split(/\n+/).filter(Boolean);

  return (
    <div className={`article-content space-y-4 ${className}`}>
      {paragraphs.map((para, pi) => {
        const ruPara = ruParagraphs[pi] || "";

        // Split paragraphs into sentences
        const sentences = splitIntoSentences(para);
        const ruSentences = splitIntoSentences(ruPara);

        return (
          <div key={pi} className="mb-6">
            {sentences.map((sentence, si) => {
              const ruSentence = ruSentences[si] || "";
              return (
                <span key={si} className="inline">
                  {/* Main text */}
                  <span
                    className="text-gray-800 text-base leading-relaxed"
                    lang={language}
                  >
                    {sentence}{" "}
                  </span>

                  {/* Russian subtitle */}
                  {showRussianSubtitles && ruSentence && (
                    <span
                      className="
                        block text-sm text-gray-400 font-light
                        mt-0.5 mb-2 leading-5
                        border-l-2 border-gray-200 pl-3
                        italic select-text
                      "
                      lang="ru"
                    >
                      {ruSentence}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Splits a paragraph string into sentences using punctuation.
 */
function splitIntoSentences(text: string): string[] {
  if (!text) return [];
  // Split on sentence-ending punctuation followed by whitespace or end of string
  const parts = text.match(/[^.!?]+[.!?]+[\s]*/g) || [text];
  return parts.map((s) => s.trim()).filter(Boolean);
}

/**
 * Hook to check whether Russian subtitles should be shown
 */
export const useShowRussianSubtitles = () => {
  const { showRussianSubtitles } = useLanguage();
  return showRussianSubtitles;
};

/**
 * Wrapper component that shows a small indicator when Russian subtitles are active
 */
export const RussianSubtitlesBadge: React.FC = () => {
  const { showRussianSubtitles, t } = useLanguage();

  if (!showRussianSubtitles) return null;

  return (
    <div className="
      inline-flex items-center gap-2 px-3 py-1.5
      bg-blue-50 border border-blue-200 rounded-full
      text-xs text-blue-600 font-medium
      mb-4
    ">
      <span>🇷🇺</span>
      <span>{t("article_russian_subtitle_hint")}</span>
    </div>
  );
};

export default ArticleContent;
