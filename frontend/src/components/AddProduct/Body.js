import React from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Body = () => {
  return (
    <StyledProductDetails>
      <StyledImageUploadContainer>
        <div className="images">
          <div className="pic">+</div>
        </div>

        <div className="tags categories">
          <div className="tags">
            <select>
              <option value="winter">winter</option>
              <option value="working">working</option>
              <option value="road">road</option>
            </select>
          </div>

          <div className="categories">
            <select>
              <option value="winter">winter</option>
              <option value="working">working</option>
              <option value="road">road</option>
            </select>
          </div>
        </div>
      </StyledImageUploadContainer>

      <StyledProductInfoForm>
        <form>
          <StyledFormGroup>
            <input type="text" placeholder="Enter digital product name..." />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="price">Pricing</label>
            <input type="text" placeholder="$0.00" id="price" />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="description">Description</label>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ data });
              }}
            />
          </StyledFormGroup>
        </form>

        <h4>Hidden</h4>
        <p>Not visible in your store front.</p>
      </StyledProductInfoForm>
    </StyledProductDetails>
  );
};

export default Body;

const StyledProductDetails = styled.article`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;

  > div {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledProductInfoForm = styled.div`
  width: 60%;

  h4 {
    margin: 30px 0 0 0;
  }
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;

  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 5px 10px;
    line-height: 30px;
    outline: none;
    font-size: 1rem;
    border: 2px solid #dedede;

    :focus {
      border-color: #f2ea79;
    }
  }

  input label {
    margin-bottom: 10px;
  }
`;

const StyledImageUploadContainer = styled.div`
  width: 35%;
`;
