This is the code for my website at [danieldrivendesign](https://danieldrivendesign.com).

If you are looking to see how the shader works, here is the path to the shaders and relevant components:

- Rotating particles
  - src/Components/Shaders/particleFrag.glsl
  - src/Components/Shaders/particleVert.glsl
    - Component 
      - src/Components/PlaneVoronoi.tsx

- "Breathing" Plane
  - src/Components/Shaders/planeVoroFrag.glsl
  - src/Components/Shaders/planeVoroVert.glsl
    - Component 
      - src/Components/PlaneVoronoi.tsx 

- Canvas
  - src/Components/MainCanvas.tsx


This website was made with Vite, Typescript and ThreeJS.