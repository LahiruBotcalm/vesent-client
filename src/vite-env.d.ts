/// <reference types="vite/client" />

import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.jpeg' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const value: string;
    export default value;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
            meshPhysicalMaterial: ReactThreeFiber.Object3DNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
            shaderMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
            planeGeometry: ReactThreeFiber.Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
            ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
            pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
            group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
        }
    }
}
