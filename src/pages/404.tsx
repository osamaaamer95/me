import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

const Main = tw.main`px-12 py-8 md:p-16`;
const Article = tw.article`prose`;

const NotFoundPage = () => {
  return (
    <Main>
      <title>Not found</title>
      <Article>
        <h1>Page not found</h1>
        <p>
          Sorry{' '}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Article>
    </Main>
  );
};

export default NotFoundPage;
