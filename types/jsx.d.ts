import { CSSProperties } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement> & { jsx?: boolean }, HTMLStyleElement>;
    }
  }
}

export {};
