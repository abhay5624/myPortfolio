import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import normalimg from "../Assets/Texture/NormalMap.png";
import styled from "styled-components";
import * as dat from "dat.gui";
const ThreeDimage = () => {
  const mountRef = useRef(null);
  const [sizes, setsizes] = useState({
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
  });
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const normaltexture = textureLoader.load(normalimg);
    setsizes({
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    });
    var scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;

    var renderer = new THREE.WebGLRenderer({
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    //object
    const geometry = new THREE.SphereGeometry(0.7, 64, 64);
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.2;
    material.roughness = 0.2;
    material.normalMap = normaltexture;
    material.color = new THREE.Color(0xff0000);
    var Sphere = new THREE.Mesh(geometry, material);

    // Light 1

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    //light 2
    const pointLight2 = new THREE.PointLight(0xff0000, 2);
    pointLight2.position.set(-1.86, 1, -1.65);
    pointLight2.intensity = 10;
    scene.add(pointLight2);

    //Light 3

    const pointLight3 = new THREE.PointLight(0xe1ff, 2);
    pointLight3.position.set(2.13, -3, -1.98);
    pointLight3.intensity = 6.8;
    scene.add(pointLight3);

    scene.add(Sphere);

    //Resize

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    //Animate
    var animate = function () {
      requestAnimationFrame(animate);
      Sphere.rotation.x += 0.01;
      Sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <ThreeDspace ref={mountRef}></ThreeDspace>;
};
const ThreeDspace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  mix-blend-mode: exclusion;
`;
export default ThreeDimage;
