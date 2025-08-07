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
  export = any;
}
