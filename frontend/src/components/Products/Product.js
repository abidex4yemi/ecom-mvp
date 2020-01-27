import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = props => {
  const { name, description, attributes, _id } = props;
  const { imageUrl } = attributes[0];

  return (
    <article>
      <Link to={`/products/${_id}`}>
        <img src={imageUrl} />
      </Link>

      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <Link to={`/products/${_id}`}>
            <span>Shop Now</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  attributes: PropTypes.arrayOf(PropTypes.object),
  _id: PropTypes.string
};

export default Product;
