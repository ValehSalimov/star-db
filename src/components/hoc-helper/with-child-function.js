import React from 'react';

const withChildFunction = fn => Wrapped => {
  // eslint-disable-next-line react/display-name
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

export default withChildFunction;