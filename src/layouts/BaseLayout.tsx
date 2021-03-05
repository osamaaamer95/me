import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const BaseLayout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col flex-1 h-screen">
      <div className="flex justify-between font-sans p-4">
        <div className="dark:text-gray-200">
          {data.site.siteMetadata?.title}
        </div>
        <ThemeToggler>
          {({
            theme,
            toggleTheme,
          }: {
            theme: 'light' | 'dark';
            toggleTheme: (theme: 'light' | 'dark') => void;
          }) => (
            <label className="text-xs dark:text-gray-400">
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
      </div>
      <div className="flex flex-1">{children}</div>
      <footer className="p-2 bottom-0 text-center dark:bg-gray-700 text-xs text-gray-400">
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default BaseLayout;
