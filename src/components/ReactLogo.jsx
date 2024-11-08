
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) =>  {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float {...props} floatIntensity={1}>
      <group position={[0, 0, 0]} scale={0.3} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.07933, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/react_logo.glb')
export default ReactLogo
