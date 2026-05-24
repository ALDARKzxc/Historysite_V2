interface ImageFillProps {
  src: string;
  /** Extra classes for the image — e.g. a hover zoom. */
  imgClassName?: string;
  /**
   * Focal point (CSS object-position). Defaults to the upper area so faces in
   * portraits stay visible when the card crops vertically.
   */
  position?: string;
}

/**
 * Fills the whole container with the image (object-cover, no empty bars) while
 * keeping the key subject visible via object-position. Drop-in replacement for an
 * `absolute inset-0 bg-cover` background div — renders one absolutely-positioned
 * <img>, so any gradient/content placed AFTER it stays on top.
 */
export default function ImageFill({ src, imgClassName = '', position = 'center 25%' }: ImageFillProps) {
  return (
    <img
      src={src}
      alt=""
      loading="eager"
      decoding="async"
      style={{ objectPosition: position }}
      className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
    />
  );
}
