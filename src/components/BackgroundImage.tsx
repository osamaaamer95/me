import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const BackgroundImage = () => {
  return (
    <StaticImage
      className="top-0 left-0 w-full h-screen z-0 dark:bg-gray-800 opacity-5 dark:opacity-100"
      style={{
        position: 'fixed',
      }}
      imgClassName=""
      src="../images/pattern.png"
      layout="fullWidth"
      alt="Background image"
      placeholder="blurred"
      transformOptions={{
        fit: 'fill',
      }}
    />
  );
};

export default BackgroundImage;
