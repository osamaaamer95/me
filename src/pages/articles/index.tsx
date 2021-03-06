import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../../components/SEO';
import BaseLayout from '../../layouts/BaseLayout';

interface IndexPageProps {
  data: {
    allMdx: {
      edges: any[];
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <BaseLayout>
      <SEO title="Home" />
      <div className="bg-transparent p-8 w-full max-w-2xl mx-auto">
        <article className="prose dark:prose-dark mx-auto w-full">
          <h1>Here are some of my articles</h1>
          <h2>Hope you like them!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            harum eveniet culpa debitis illum facere esse alias. Numquam
            suscipit eum, necessitatibus laborum quaerat, accusantium, a culpa
            eveniet maxime sunt iure.
          </p>
          <ol>
            {data.allMdx.edges.map(({ node: { frontmatter } }) => {
              return (
                <li key={frontmatter.path}>
                  <Link to={`/articles${frontmatter.path}`}>
                    {frontmatter.title} - {frontmatter.date}
                  </Link>
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </BaseLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;
