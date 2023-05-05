type planet_names = 'default';
export const planets: {
  [key in planet_names]: { left: string; right: string };
} = {
  default: {
    left: 'url(./assets/planet-walker/planet/planet-left.png)',
    right: 'url(./assets/planet-walker/planet/planet-right.png)',
  },
};
