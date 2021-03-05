import { Link } from 'gatsby';
import React from 'react';
import BaseLayout from '../layouts/BaseLayout';

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <title>Not found</title>
      <article>
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
      </article>
    </BaseLayout>
  );
};

export default NotFoundPage;
