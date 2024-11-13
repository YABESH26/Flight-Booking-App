import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/css/FadeTransition.css';

const FadeTransition = ({ inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
