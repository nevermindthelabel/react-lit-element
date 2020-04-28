import React, { useRef, useEffect } from 'react';
// import 'web-component-essentials';
import './lit-element/custom-component.js';

const Wrapper = (props) => {
  console.log(props)
  const ref = useRef();

  useEffect(() => {
  //   ref.current.title = props.title;
  //   ref.current.addEventListener('show', e => props.onShow(e));
  // }, [props])
  });

  return (
  // <x-dropdown ref={ref}>{props.chidren}</x-dropdown>
  <custom-element ref={ref}>{props.children}</custom-element>
  );
}

export default Wrapper;
