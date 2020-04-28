import React from 'react';
import './lit-element/custom-component.js';

const Wrapper = (props) => {
   return (
  <custom-element>{props.children}</custom-element>
  );
}

export default Wrapper;
