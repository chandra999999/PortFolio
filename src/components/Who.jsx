import React from 'react'
import styled from "styled-components";
import Cube from './Cube';
import {Canvas} from '@react-three/fiber'

const Section = styled.div` 
height: 100vh;
scroll-behavior: smooth;
display:flex;

justify-content:center;
// background-color:yellow;
`;

const Container = styled.div`
height:100vh;

width:1400px;
display:flex;
justify-content:space-between;
@media only screen and (max-width:768px){
width:100%;
flex-direction:column;
}
`;


const Left = styled.div`

flex:1;
@media only screen and (max-width:768px){
  display:none;
}
`;
const Title = styled.h1`
font-size:70px;
color:white;
@media only screen and (max-width:768px){
  font-size:60px;
}
`;

const Whatwedo = styled.div`
display:flex;
align-items:center;
color:white;
gap:20px;
`;
const Line = styled.img`
height:2px;
width:40px;
`;
const Subtitle = styled.h2`
color:#da4ea2;
font-weight:500;
`;
const Desc = styled.p`
color:lightgrey;
font-size:30px;
`;
const Button = styled.button`
background-color:#B71375;
font-weight:600;
width:120px;
 padding:7px;
 color:white;
border-radius:3px;
border:none;
`;

const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width:768px){
  align-items:center;
  text-align:center;
}
`;


const Who = () => {
  return (

    <Section>

    


      <Container>
      <Left>
      <Canvas camera={{fov:25 ,position:[4,4,4]}}>
    <Cube />
      </Canvas>
      </Left>
        <Right>
         {/* <Img src="./img/Astronaut-sitting-on-the-crescent-moon-on-transparent-background-PNG.png"></Img> */}
   
        <Title>Think outside the square space</Title>
        <Whatwedo>
          <Line src="./img/line.png"></Line>
          <Subtitle>What we are</Subtitle>
        </Whatwedo>
        <Desc>a creative group of designers and devlopers with a passion for the arts</Desc>
        <Button>See our Works</Button>
        
        </Right>
      </Container>

    </Section>

  )
}

export default Who
