import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  position: relative;
  top: 100px;
  left: 50%:
`;

const Loader = (props) => {
  return <ClipLoader {...props} css={override} />;
};

export default Loader;
