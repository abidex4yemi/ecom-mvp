import React from 'react';
import styled from 'styled-components';

const Body = () => {
  return (
    <article>
      <div>
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
      </div>

      <div>
        <form>
          <div>
            <input type="text" placeholder="Enter digital product name..." />
          </div>

          <div>
            <label>Pricing</label>
            <input type="text" placeholder="$0.00" />
          </div>

          <textarea placeholder="Write here..." id="description"></textarea>
        </form>

        <div>
          <h4>Hidden</h4>
          <p>Not visible in your store front.</p>
        </div>
      </div>
    </article>
  );
};

export default Body;
