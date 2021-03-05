import React from 'react';
import BaseLayout from '../layouts/BaseLayout';

const IndexPage = () => {
  return (
    <BaseLayout>
      <div className="bg-white p-8 dark:bg-gray-800 text-pink-800 dark:text-yellow-200">
        <article className="prose dark:prose-dark">
          <h1>Hi! My name is Osama.</h1>
          <h2>Welcome to my personal slice of the web!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            harum eveniet culpa debitis illum facere esse alias. Numquam
            suscipit eum, necessitatibus laborum quaerat, accusantium, a culpa
            eveniet maxime sunt iure.
          </p>
          <code className="dark:text-blue-500">Here is some code</code>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            harum eveniet culpa debitis illum facere esse alias. Numquam
            suscipit eum, necessitatibus laborum quaerat, accusantium, a culpa
            eveniet maxime sunt iure.
          </p>
          <blockquote className="dark:text-gray-300">
            A quote perhaps?
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            harum eveniet culpa debitis illum facere esse alias. Numquam
            suscipit eum, necessitatibus laborum quaerat, accusantium, a culpa
            eveniet maxime sunt iure.
          </p>
          <ul>
            <li>A bullet point</li>
            <li>Another bullet point</li>
          </ul>
          <pre className="dark:bg-gray-500 dark:text-gray-900">Some pre?</pre>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            harum eveniet culpa debitis illum facere esse alias. Numquam
            suscipit eum, necessitatibus laborum quaerat, accusantium, a culpa
            eveniet maxime sunt iure.
          </p>
        </article>
      </div>
    </BaseLayout>
  );
};

export default IndexPage;
