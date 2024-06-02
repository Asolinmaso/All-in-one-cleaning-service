import dynamic from 'next/dynamic';
import React from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

const SelectWrapper = (props) => {
  return <Select {...props} />;
};

export default SelectWrapper;
