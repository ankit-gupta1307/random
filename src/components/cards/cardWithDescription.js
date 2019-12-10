import React from 'react';
import styled from "@emotion/styled";

const Card = styled.div`
	width: 45%;
  max-width: 45%;
  height: 304px;
  background: #FFF;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
	border-radius: 2px;
`;


const CardWithDescription = (props) => {
  return (
    <Card {...props}>
    </Card>
  );
};

export default CardWithDescription;