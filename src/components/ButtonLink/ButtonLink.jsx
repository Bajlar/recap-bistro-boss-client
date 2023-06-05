import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = () => {
  return (
    <div>
      <Link to="/order">
        <button className="btn btn-outline bg-white border-0 border-b-4">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default ButtonLink;