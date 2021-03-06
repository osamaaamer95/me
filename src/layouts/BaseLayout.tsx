import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ThemeChanger from '../components/ThemeChanger';
import SEO from '../components/SEO';
import { StaticImage } from 'gatsby-plugin-image';

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
      <StaticImage
        className="top-0 left-0 w-full h-screen z-0 dark:bg-gray-800 opacity-5 dark:opacity-100"
        style={{
          position: 'fixed',
        }}
        imgClassName=""
        src="../images/pattern2.png"
        layout="fullWidth"
        alt="A dinosaur"
        placeholder="blurred"
        transformOptions={{
          fit: 'fill',
        }}
      />
      <div className="relative bg-transparent flex flex-col flex-1 h-screen">
        <div className="flex justify-between font-sans p-4">
          <div className="dark:text-gray-200">
            {data.site.siteMetadata?.title}
          </div>
          <ThemeChanger />
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
