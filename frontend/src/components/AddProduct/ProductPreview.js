import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const ProductPreview = props => {
  const { name, description, attributes } = props.newProductDetails;
  const { imageUrl, sizes, price } = attributes;

  const renderSizes = () => {
    return (
      <StyledProductSizes>
        <p>Select size</p>
        <ul>
          {sizes.map(size => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </StyledProductSizes>
    );
  };

  const renderProductPreview = () => {
    return (
      <>
        {' '}
        <StyledImageContainer>
          <img src={imageUrl} />
        </StyledImageContainer>
        <StyledProductDetails>
          <h3>{name}</h3>
          {ReactHtmlParser(description)}
          {renderSizes()}
          <h3>$ {price}</h3>
        </StyledProductDetails>
      </>
    );
  };

  return <StyledProductPreview>{renderProductPreview()}</StyledProductPreview>;
};

export default ProductPreview;

const StyledProductPreview = styled.article`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  min-height: 530px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  h3 {
    font-weight: bold;
  }
`;

const StyledImageContainer = styled.div`
  width: 50%;
`;

const StyledProductDetails = styled.div`
  padding: 1rem;
  width: 40%;
`;

const StyledProductSizes = styled.div`
  p {
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 5px;
      margin-right: 8px;
      text-align: center;
      min-width: 30px;
      border-radius: 2px;
      box-sizing: border-box;
      border: 1px solid #dedede;
    }
  }
`;
