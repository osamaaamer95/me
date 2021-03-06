import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ThemeChanger from '../components/ThemeChanger';
import SEO from '../components/SEO';
import BackgroundImage from '../components/BackgroundImage';
import HomeButton from '../components/HomeButton';

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
    <>
      <SEO title="Home" />
      <BackgroundImage />
      <div className="relative bg-transparent flex flex-col flex-1 h-screen">
        <div className="flex justify-between font-sans p-4 px-8">
          <HomeButton title={data.site?.siteMetadata?.title ?? 'Home'} />
          <div className="flex items-center space-x-5">
            <Link className="text-green-600 dark:text-green-300" to="/articles">Articles</Link>
            <ThemeChanger />
          </div>
        </div>
        <div className="flex flex-1">{children}</div>
        <footer className="p-2 bottom-0 text-center dark:bg-gray-700 text-xs text-gray-400">
          {`© ${new Date().getFullYear()}, Built with `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default BaseLayout;
