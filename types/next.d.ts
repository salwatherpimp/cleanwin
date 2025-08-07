declare module 'next/image' {
  import { ComponentProps } from 'react';
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'next/dynamic' {
  function dynamic<T>(loader: () => Promise<{ default: T }>, options?: any): T;
  export default dynamic;
}
