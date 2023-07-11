import React from 'react'
import { OrbitControls,Stage } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import Peact from './React_logo'

const Devlopment = () => {
  return (
    <Canvas >
      <Stage   environment="city" intensity ={0.6} >
     <Peact />
      </Stage>
   <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Devlopment
