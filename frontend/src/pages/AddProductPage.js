import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addProduct, fetchCategories } from '../state/actions';
import Header from '../components/AddProduct/Header';
import Body from '../components/AddProduct/Body';
import Footer from '../components/AddProduct/Footer';
import ProductPreview from '../components/AddProduct/ProductPreview';

const AddProduct = props => {
  useEffect(() => {
    props.fetchCategories();
  }, []);

  const [newProductDetails, setNewProductDetails] = useState({
    name: '',
    description: '',
    attributes: {
      sizes: ['40', '45', '15'],
      price: '',
      imageUrl:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/143003/1.jpg?6475',
      color: 'blue'
    },
    categoryId: ''
  });

  const handleProductTitleChange = evt => {
    const { name, value } = evt.target;

    setNewProductDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProductCategoryChange = evt => {
    const { value } = evt.target;

    setNewProductDetails(prevState => ({
      ...prevState,
      categoryId: value
    }));
  };

  const handleProductAttributeChange = evt => {
    const { name, value } = evt.target;

    setNewProductDetails(prevState => ({
      ...prevState,
      attributes: {
        ...prevState.attributes,
        [name]: value
      }
    }));
  };

  const handleTextAreaInputChange = (event, editor) => {
    const data = editor.getData();

    setNewProductDetails(prevState => ({
      ...prevState,
      description: data
    }));
  };
  // Save new product
  const handleSaveNewProduct = evt => {
    const price = { price: parseFloat(newProductDetails.attributes.price) };

    const newProduct = {
      ...newProductDetails,
      attributes: [
        {
          ...newProductDetails.attributes,
          ...price
        }
      ]
    };

    props.addProduct(newProduct).then(res => {
      props.history.push('/');
    });
  };

  return (
    <main>
      <StyledContainer>
        <StyledAddProductPage>
          <StyledPreviewProduct>
            <ProductPreview newProductDetails={newProductDetails} />
          </StyledPreviewProduct>

          <StyledAddProduct>
            <Header />
            <Body
              handleProductTitleChange={handleProductTitleChange}
              handleProductAttributeChange={handleProductAttributeChange}
              newProductDetails={newProductDetails}
              handleTextAreaInputChange={handleTextAreaInputChange}
              categories={props.categories}
              handleProductCategoryChange={handleProductCategoryChange}
            />
            <Footer handleSaveNewProduct={handleSaveNewProduct} />
          </StyledAddProduct>
        </StyledAddProductPage>
      </StyledContainer>
    </main>
  );
};

const mapSateToProps = state => state;

export default connect(mapSateToProps, { addProduct, fetchCategories })(
  AddProduct
);

const StyledAddProductPage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  section {
    box-sizing: border-box;
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
  width: 55%;
`;

const StyledPreviewProduct = styled.section`
  width: 45%;
`;
