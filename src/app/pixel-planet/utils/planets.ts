type planet_names = 'default';
export const planets: {
  [key in planet_names]: { left: string; right: string; whole: string };
} = {
  default: {
    left: 'url(./assets/planet-walker/planet/default/left.png)',
    right: 'url(./assets/planet-walker/planet/default/right.png)',
    whole: 'url(./assets/planet-walker/planet/default/globe.png)',
  },
};
