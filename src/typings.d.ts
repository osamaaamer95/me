// twin.d.ts
import 'twin.macro';
import styledImport from '@emotion/styled';
import { css as cssImport } from '@emotion/react';

// The css prop
// https://emotion.sh/docs/typescript#css-prop
import {} from '@emotion/react/types/css-prop';

interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string;
    }
  }
}
