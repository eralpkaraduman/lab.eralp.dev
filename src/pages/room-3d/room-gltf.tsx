/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['Laptop-bottom']: THREE.Mesh
    ['Laptop-top']: THREE.Mesh
    Desk: THREE.Mesh
  }
  materials: {
    VertexColorMaterial: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF<GLTFResult>('/models/room-3d/room.gltf')
  return (
    <group ref={group} {...props}>
      <group position={[0, 0.73, 0]} rotation={[0, 0, 0]}>
        <mesh
          material={materials.VertexColorMaterial}
          geometry={nodes['Laptop-bottom'].geometry}
          position={[0, -0.01, -0.09]}
          rotation={[0, 0, 0]}
        />
        <mesh
          material={materials.VertexColorMaterial}
          geometry={nodes['Laptop-top'].geometry}
          position={[0, 0, -0.21]}
          rotation={[0, 0, Math.PI]}
        />
      </group>
      <mesh material={materials.VertexColorMaterial} geometry={nodes.Desk.geometry} />
    </group>
  )
}

useGLTF.preload('/room.gltf')
