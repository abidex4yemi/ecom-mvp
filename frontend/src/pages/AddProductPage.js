import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../components/AddProduct/Header';
import Body from '../components/AddProduct/Body';
import Footer from '../components/AddProduct/Footer';
import ProductPreview from '../components/AddProduct/ProductPreview';

const AddProduct = () => {
  return (
    <main>
      <StyledContainer>
        <StyledAddProductPage>
          <section>
            <ProductPreview />
          </section>

          <StyledAddProduct>
            <Header />
            <Body />
            <Footer />
          </StyledAddProduct>
        </StyledAddProductPage>
      </StyledContainer>
    </main>
  );
};

export default AddProduct;

const StyledAddProductPage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  section {
    box-sizing: border-box;
    width: 48%;
    border-radius: 2px;
  }
`;

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const StyledAddProduct = styled.section`
  background: #f2f2f2;
  border-top: 1px solid #818181;
`;
