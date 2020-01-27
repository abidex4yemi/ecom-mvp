import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchProducts } from '../state/actions';
import Product from '../components/Products/Product';
import { GlobalStyles } from './GlobalStyles';

const ProductsPage = props => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const renderProducts = () => {
    if (props.data.fetchingProducts) {
      return <div>Loading products...</div>;
    } else {
      return props.data.products.map(product => (
        <Product key={product._id} productDetails={product} />
      ));
    }
  };

  return (
    <StyledProductPage>
      <h2>Welcome Digital Hub store!</h2>

      <StyledCreateNewProduct to={`/add-product`}>
        <span>Add Product</span>
      </StyledCreateNewProduct>

      <GlobalStyles />

      <StyledContainer>
        <StyledProductContainer>{renderProducts()}</StyledProductContainer>
      </StyledContainer>
    </StyledProductPage>
  );
};

const mapSateToProps = state => state;

export default connect(mapSateToProps, { fetchProducts })(ProductsPage);

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledProductPage = styled.main`
  padding-top: 30px;
  text-align: center;

  h2 {
    text-align: center;
    margin: 50px;
  }
`;

const StyledCreateNewProduct = styled(Link)`
  color: #f4f4f4;
  font-weight: bold;
  border: 2px solid rgb(0, 0, 0);
  padding: 10px 30px;
  text-align: center;
  background: hsla(149, 78%, 53%, 1);
  display: inline-block;
  overflow: hidden;
  margin: 30px 0;
  max-height: 44px;
  max-width: 510px;
  width: auto;
  transition: 0.3s;

  :hover {
    background: rgb(0, 0, 0);
    color: #fff;
  }
`;
