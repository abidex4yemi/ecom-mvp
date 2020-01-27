import React, { useEffect } from 'react';
import styled from 'styled-components';

const ProductPreview = () => {
  return <StyledProductPreview>Preview</StyledProductPreview>;
};

export default ProductPreview;

const StyledProductPreview = styled.article`
  border: 1px solid #000;
  min-height: 510px;
`;
