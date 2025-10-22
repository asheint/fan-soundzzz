import * as THREE from "three";

export function convertMaterialsToBasic(materials, alphaTestValue = 0) {
  const newMaterials = {};

  Object.keys(materials).forEach((key) => {
    const oldMaterial = materials[key];
    if (oldMaterial instanceof THREE.MeshStandardMaterial) {
      const newMaterial = new THREE.MeshBasicMaterial({
        map: oldMaterial.map,
        transparent: oldMaterial.transparent,
        alphaTest: oldMaterial.transparent ? 0.1 : alphaTestValue,
      });
      newMaterials[key] = newMaterial;
    } else {
      newMaterials[key] = oldMaterial;
    }
  });

  return newMaterials;
}
