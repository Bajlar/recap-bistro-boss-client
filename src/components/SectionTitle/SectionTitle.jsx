import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="w-6/12 mx-auto mb-12">
      <p className="text-lg text-yellow-500 mb-4 text-center">--{subHeading}---</p>
      <p className="text-4xl uppercase text-center border-y-4 py-4">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;