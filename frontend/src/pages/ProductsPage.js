import React, { useEffect } from 'react';
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
    <main>
      <GlobalStyles />
      <StyledContainer>
        <StyledProductContainer>{renderProducts()}</StyledProductContainer>
      </StyledContainer>
    </main>
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
