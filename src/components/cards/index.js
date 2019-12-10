import React from 'react';
import styled from "@emotion/styled";
import CardWithDescription from './cardWithDescription'
import DivWithDynamicStyles from './divWithDynamicStyles'

const boxShadow = '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)';

const Container = styled.div`
  max-width: 100%;
  margin: 64px 83px 64px 83px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlexibleDiv = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
   
  }
);

const DivWithWidth40 = styled(FlexibleDiv)({
   width: "40%"
})

const widthWithHeight100per = styled(FlexibleDiv)(
  {
    width: "100%",
    boxShadow: boxShadow,
  }
) ;


const LeftDivWithHeight136 = styled(widthWithHeight100per)(
  {
    height: '136px',
    
    margin:"32px 0 32px 0"
  }
);

const LeftDivWithHeight304 = styled(widthWithHeight100per)(
  {
    height: '304px'
  }
);

const LeftDivWithHeight208 = styled(widthWithHeight100per)(
  {
    height: '208px'
  }
);

const LeftDivWithWidth100of40 = styled(FlexibleDiv) (
  {
    width: "100%"
  }
)

const LeftDivWithHeight176 = styled(LeftDivWithWidth100of40) (
  {
    background: "#009688",
    height: "176px",
    flexDirection: 'row'
  }
)

const LeftDivWithHeight48 = styled(LeftDivWithWidth100of40) (
  {
    height: "calc(74.5px - 26.5px)",
    padding: "7px 0 19.5px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  }
)



const InsideDivIn176 = styled.h4({
  width: "calc(100% - 33px)",
  // margin: 0,
  margin: "0 15px 0 18px",
  height: "100%",
  display: "flex"
})

const Para = styled.p({
  margin: 0,
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  color: "rgba(0, 0, 0, 0.87)"
})

const BottomMostLeftDiv = styled.div`
  width: calc(100% -33px);
  height: 53.5px;
  padding: 0 18px 0 15px;
  display: flex;
`;

const Button = styled.button({
    color: "#009688",
    alignSelf: "center",
    fontSize: "14px",
    fontWeight: "400",
    background: "transparent",
    border: "none",
    boxShadow: "none"
  }, 
  props => ({
    marginRight: props.marginRight
  })
)

const H3 = styled.h3`
  align-self: flex-end;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  margin-left: 15px;
`
  


const CardPage = () => {
  return (
      <Container>  
        <DivWithWidth40>
          <LeftDivWithHeight304> 
            <LeftDivWithHeight176>
              <H3>Kangaroo Valley Safari</H3>
            </LeftDivWithHeight176>
            <LeftDivWithHeight48>
                <InsideDivIn176>
                  <Para> hello World  hello World  hello World  hello World  hello World  hello World  hello World  hello World </Para>
                </InsideDivIn176>
            </LeftDivWithHeight48>
            <BottomMostLeftDiv>
              <Button marginRight="20px">SHARE</Button>
              <Button>LEARN MORE </Button>
            </BottomMostLeftDiv>

          </LeftDivWithHeight304>
          <LeftDivWithHeight136/>
          <LeftDivWithHeight208>

          </LeftDivWithHeight208>
        </DivWithWidth40>

        <DivWithWidth40>
          
        </DivWithWidth40>


      </Container>
  );
};

export default CardPage;

// <Container>
//       <CardWithDescription>
//         <DivWithDynamicStyles background="#009688" height="176px">
//           <H3>Hello World</H3>
//         </DivWithDynamicStyles>
//       </CardWithDescription>
//       <CardWithDescription>
//         <DivWithDynamicStyles background="#009688" height="176px">
//           <H3>Hello World</H3>
//         </DivWithDynamicStyles>
//       </CardWithDescription>
//     </Container>