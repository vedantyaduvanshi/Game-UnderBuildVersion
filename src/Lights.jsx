import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function Lights()
{
    const light = useRef()
    
    useFrame((state) =>
    {
        light.current.position.z = state.camera.position.z + 1 - 4
        light.current.target.position.z = state.camera.position.z - 4
        light.current.target.updateMatrixWorld()
    })

    return <>
        <directionalLight
            ref={ light }
            castShadow
            position={ [ 4, 4, 1 ] }
            intensity={ 4.5 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 } 
        />
        {/* <ambientLight intensity={ 1.5 } /> */}

        <hemisphereLight intensity={1} groundColor="black" />
      <spotLight position={[10, 10, 10]} angle={0.12} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />


      <Sparkles
      size={1}
      scale={[5,3,160]}
      speed={0.2}
      count={150}
      color={"red"}
      /> 
    </>
}