import React from 'react';
import styled from "@emotion/styled";

const DynamicDiv = styled.div(
  {
    width: '100%',
    display: 'flex',
    'max-height': '100px'

  },
  props => ({
    background: props.background,
    height: props.height,
    padding: props.padding,
    margin: props.margin,
  })
);


const DivWithDynamicStyles = (props) => {
  return (
    <DynamicDiv {...props}>
      
    </DynamicDiv>
  );
};

export default DivWithDynamicStyles;