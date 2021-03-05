import React from 'react';
import tw from 'twin.macro';

const Main = tw.main`px-12 py-8 md:p-16`;
const Article = tw.article`prose`;

const IndexPage = () => {
  return (
    <Main>
      <Article>
        <h1>Hi! My name is Osama.</h1>
        <p>Welcome to my personal slice of the web!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, harum
          eveniet culpa debitis illum facere esse alias. Numquam suscipit eum,
          necessitatibus laborum quaerat, accusantium, a culpa eveniet maxime
          sunt iure.
        </p>
      </Article>
    </Main>
  );
};

export default IndexPage;
