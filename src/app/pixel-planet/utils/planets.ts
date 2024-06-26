export const planet_names = [
  'earth',
  'jupiter',
  'mars',
  'mercury',
  'neptune',
  'saturn',
  'uranus',
  'venus',
] as const;
export type PlanetNames = (typeof planet_names)[number];
export const planets: {
  [key in PlanetNames]: { left: string; right: string; whole: string };
} = {
  earth: {
    left: 'url(./assets/planet-walker/planets/earth/earth.left15px.png)',
    right: 'url(./assets/planet-walker/planets/earth/earth.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/earth/earth.globe4px.png)',
  },
  jupiter: {
    left: 'url(./assets/planet-walker/planets/jupiter/jupiter.left15px.png)',
    right: 'url(./assets/planet-walker/planets/jupiter/jupiter.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/jupiter/jupiter.globe4px.png)',
  },
  mars: {
    left: 'url(./assets/planet-walker/planets/mars/mars.left15px.png)',
    right: 'url(./assets/planet-walker/planets/mars/mars.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/mars/mars.globe4px.png)',
  },
  mercury: {
    left: 'url(./assets/planet-walker/planets/mercury/mercury.left15px.png)',
    right: 'url(./assets/planet-walker/planets/mercury/mercury.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/mercury/mercury.globe4px.png)',
  },
  neptune: {
    left: 'url(./assets/planet-walker/planets/neptune/neptune.left15px.png)',
    right: 'url(./assets/planet-walker/planets/neptune/neptune.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/neptune/neptune.globe4px.png)',
  },
  saturn: {
    left: 'url(./assets/planet-walker/planets/saturn/saturn.left15px.png)',
    right: 'url(./assets/planet-walker/planets/saturn/saturn.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/saturn/saturn.globe4px.png)',
  },
  uranus: {
    left: 'url(./assets/planet-walker/planets/uranus/uranus.left15px.png)',
    right: 'url(./assets/planet-walker/planets/uranus/uranus.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/uranus/uranus.globe4px.png)',
  },
  venus: {
    left: 'url(./assets/planet-walker/planets/venus/venus.left15px.png)',
    right: 'url(./assets/planet-walker/planets/venus/venus.right15px.png)',
    whole: 'url(./assets/planet-walker/planets/venus/venus.globe4px.png)',
  },
};
