import * as THREE from 'three';

export const createArrowGeometry = () => {
  const shape = new THREE.Shape();

  shape.moveTo(-0.9, -0.22);
  shape.lineTo(0.08, -0.22);
  shape.lineTo(0.08, -0.48);
  shape.lineTo(0.9, 0);
  shape.lineTo(0.08, 0.48);
  shape.lineTo(0.08, 0.22);
  shape.lineTo(-0.9, 0.22);
  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelSegments: 2,
    steps: 1,
  });
};
