declare module 'next/image' {
  import { ComponentType } from 'react';
  const Image: ComponentType<any>;
  export default Image;
}

declare module 'next/dynamic' {
  const dynamic: any;
  export default dynamic;
}

declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  export const ResolvingMetadata: any;
  export const Metadata: any;
  export const ResolvedMetadata: any;
  export * from 'next';
}

declare module 'next' {
  export interface Metadata {
    title?: string | { default: string; template?: string };
    description?: string;
    robots?: string | { index?: boolean; follow?: boolean };
    [key: string]: any;
  }
  export const ResolvingMetadata: any;
}
