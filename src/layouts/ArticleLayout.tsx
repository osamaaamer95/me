import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import HomeButton from '../components/HomeButton';
import SEO from '../components/SEO';
import ThemeChanger from '../components/ThemeChanger';

interface Props {
  uri: string;
  pageContext: { frontmatter: any };
}

const ArticleLayout: React.FC<Props> = ({ children, pageContext }) => {
  return (
    <StaticQuery
      query={graphql`
        query NonPageQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({ site: { siteMetadata } }) => (
        <>
          <SEO
            title={pageContext.frontmatter.title}
            description={pageContext.frontmatter.descrption}
          />
          <BackgroundImage />
          <div className="relative bg-transparent flex flex-col flex-1 h-screen">
            <div className="flex justify-between font-sans p-4 px-8">
              <HomeButton title={siteMetadata?.title ?? 'Home'} />
              <ThemeChanger />
            </div>
            <div className="flex flex-1 p-8 w-full max-w-2xl mx-auto">
              <div className="prose dark:prose-dark">{children}</div>
            </div>
            <footer className="p-2 bottom-0 text-center dark:bg-gray-700 text-xs text-gray-400">
              {`© ${new Date().getFullYear()}, Built with `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
        </>
      )}
    />
  );
};

export default ArticleLayout;
