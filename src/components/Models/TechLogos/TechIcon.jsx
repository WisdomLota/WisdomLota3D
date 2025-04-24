import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'


const TechIcon = ({ model }) => {

    const scene = useGLTF(model.modelPath);

    //tweak the color of the techicon for the interactive developer only
    useEffect(() => {
        if (model.name === 'Interactive Development') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'blue'})
                }
            })
        }
    }, [scene])

  return (
    <Canvas>
        <ambientLight intensity={0.4}/>
        <directionalLight position={[5,5,5]} intensity={1}/>
        <Environment preset='city'/>
        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon