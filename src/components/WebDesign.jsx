import { OrbitControls,Stage } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React from 'react'
import Mac_book_1 from "./Mac_book_1";


// const Desc=styled.div`
// width:200px;
// height:70px;
// padding:20px;
// background-color:black;
// border-radius:10px;
// position:absolute;
// top:100px;
// right:100px;

// `;
const WebDesign = () => {
  return (
    <>
    <Canvas >
      <Stage   environment="city" intensity ={0.2} >
      <Mac_book_1 />
      </Stage>
   <OrbitControls enableZoom={false}/>
    </Canvas>

    </>
  )
}

export default WebDesign
