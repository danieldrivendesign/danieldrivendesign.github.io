import {useThree} from "@react-three/fiber";
import {useLayoutEffect, useRef} from "react";
import * as THREE from "three";

export default function OrbitCamera() {
    const camera = useRef<THREE.PerspectiveCamera>(null);
    const set = useThree((three) => three.set);
    const prevCamera = useThree((three) => three.camera);

    useLayoutEffect(() => {
        const current = camera.current;
        if (!current) return;
        const prev = prevCamera;
        set(() => ({camera: current}));
        return () => set(() => ({camera: prev}));
    }, [camera, set]);

    return (
        <perspectiveCamera ref={camera} position={[0, 0, 10]}/>
    )
}