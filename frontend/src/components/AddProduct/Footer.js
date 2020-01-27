import React from 'react';
import styled from 'styled-components';

const Footer = props => {
  const { handleSaveNewProduct } = props;

  return (
    <StyledFooter>
      <button>Cancel</button>
      <button>Delete</button>
      <button type="button" onClick={handleSaveNewProduct}>
        Save
      </button>
      <button>Save & Publish</button>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.header`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dedede;
    height: 40px;
    

    button {
      display: block;
      font-size: 0.8rem;
      width: 100%;
      border: none;
      background: #f2f2f2;
      border-right:1px solid #dedede;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;

      :hover {
        background: #8b8b8b;
        color: #fff;
      }

      :last-child {
      border-right: 0;
    }
    }
  }
`;
