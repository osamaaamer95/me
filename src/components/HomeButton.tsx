import { Link } from 'gatsby';
import React from 'react';

interface HomeButtonProps {
  title: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title }) => {
  return (
    <Link to="/">
      <div className="dark:text-gray-200">{title}</div>
    </Link>
  );
};

export default HomeButton;
