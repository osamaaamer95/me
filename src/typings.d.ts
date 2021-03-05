declare module 'gatsby-plugin-dark-mode';

// interface customWindow extends Window {
// }

interface Window {
  __theme: 'light' | 'dark';
  __onThemeChange?: any;
  __setPreferredTheme?: any;
}

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
