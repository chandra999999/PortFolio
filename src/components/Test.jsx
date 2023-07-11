import React from 'react'
import styled from "styled-components";
import {Canvas} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei';
import Cube from './Cube';
const Container=styled.div`
height:100vh;
width:100%;

`;
const Test = () => {
  return (
    <Container>
<Canvas>
    <Cube />
      </Canvas>
    </Container>
  )
}

export default Test
