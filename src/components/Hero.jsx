import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import {Canvas} from '@react-three/fiber'
import { OrbitControls ,Sphere,MeshDistortMaterial} from '@react-three/drei';
const Section = styled.div` 
height: 100vh;
scroll-behavior: smooth;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media only screen and (max-width:768px){
height:200vh;
}

`;

const Container = styled.div`
height:100%;

width:1400px;
display:flex;
justify-content:space-between;
@media only screen and (max-width:768px){
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  }
`;


const Left = styled.div`

display:flex;
flex:2;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width:768px){
  flex:1;
  align-items:center;
}
`;
const Title = styled.h1`
font-size:70px;
color:white;
@media only screen and (max-width:768px){
  text-align:center;
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
@media only screen and (max-width:768px){
  padding:20px;
  text-align:center;
}
`;
const Button = styled.button`
background-color:#B71375;
font-weight:600;
width:100px;
 padding:7px;
 color:white;
border-radius:3px;
border:none;
`;

const Right = styled.div`
flex:3;

object-fit:contain;
overflow:auto;
position:relative;
@media only screen and (max-width:768px){
  flex:1;
  width:100%;
}
`;

const Img = styled.img`
width:600px;
height:600px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
animation-name: floatAnimation;
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
@media only screen and (max-width:768px){
  width:300px;
  height:300px;
}
@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

}
`;

const Hero = () => {
  return (

    <Section>

      <Navbar />


      <Container>
        <Left>
        <Title>Think..Make..Solve</Title>
        <Whatwedo>
          <Line src="./img/line.png"></Line>
          <Subtitle>What we do</Subtitle>
        </Whatwedo>
        <Desc>we enjoy delightful,human-centered digital 
          experiences</Desc>
        <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas camera={{fov:25 ,position:[4,4,4]}}>
        <OrbitControls enableZoom={false} />
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>   
       <Sphere args={[1,100,200]} scale={1.3}>
       <MeshDistortMaterial
       color="#220736" attach="material" distort={0.5} speed={2} />
       </Sphere>
      </Canvas>
         <Img src="./img/Astronaut-sitting-on-the-crescent-moon-on-transparent-background-PNG.png"></Img>
        </Right>
      </Container> 

    </Section>

  )
}

export default Hero
