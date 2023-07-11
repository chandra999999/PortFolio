
import React,{useRef} from 'react';

import { useFrame} from '@react-three/fiber'
import { OrbitControls ,PerspectiveCamera, RenderTexture ,Text} from '@react-three/drei';
const Cube = () => {
    const textref=useRef()

useFrame(state=>(textref.current.position.x=Math.sin(state.clock.elapsedTime)*2 ));
  return (

<mesh>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>    <boxGeometry/>
    <meshStandardMaterial>
    <RenderTexture attach="map">
        <PerspectiveCamera 
        makeDefault position={[0,0,4]} />
      <color attach="background" args={["black"]} />
      <Text ref={textref} fontSize={3} color="grey">
        hello
      </Text>
    </RenderTexture>
        </meshStandardMaterial>
</mesh>
   
  )
}

export default Cube
