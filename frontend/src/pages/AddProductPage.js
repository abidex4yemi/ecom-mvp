import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from '../constants';

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
      imageUrl: '',
      color: 'blue'
    },
    categoryId: '5e2de29e1c9d44000041a4ca'
  });

  const handleImageUpload = async evt => {
    // Not so good way of validation(test mode)
    if (evt.target.files[0].size > 307200) {
      alert('File is too big!');
      evt.target.value = '';
    }

    const imageFile = new FormData();
    imageFile.append('file', evt.target.files[0]);
    imageFile.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    await axios
      .post(CLOUDINARY_URL, imageFile)
      .then(res => {
        setNewProductDetails(prevState => ({
          ...prevState,
          attributes: {
            ...prevState.attributes,
            imageUrl: res.data.secure_url
          }
        }));
      })
      .catch(err => err);
  };

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
      if (res.status === 201) {
        props.history.push('/');
      }
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
              handleImageUpload={handleImageUpload}
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
