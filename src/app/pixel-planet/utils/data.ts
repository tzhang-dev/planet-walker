import {PlanetNames} from "src/app/pixel-planet/utils/planets";
type ExpData = {
  startDate: string;
  players: {
    id: number;
    planet: PlanetNames;
    side: 'left' | 'right';
  }[],
  points: {
    [date: string]: {
      id: number;
      planet: PlanetNames;
      side: 'left' | 'right';
      value: number;
    }[]
  }
}
export const data: ExpData ={
  "startDate": "2023-06-26",
  "players": [
    {
      "id": 1,
      "planet": "earth",
      "side": "left"
    },
    {
      "id": 2,
      "planet": "earth",
      "side": "right"
    },
    {
      "id": 3,
      "planet": "jupiter",
      "side": "left"
    },
    {
      "id": 4,
      "planet": "jupiter",
      "side": "right"
    },
    {
      "id": 5,
      "planet": "mars",
      "side": "left"
    },
    {
      "id": 6,
      "planet": "mars",
      "side": "right"
    },
    {
      "id": 7,
      "planet": "mercury",
      "side": "left"
    },
    {
      "id": 8,
      "planet": "mercury",
      "side": "right"
    },
    {
      "id": 9,
      "planet": "neptune",
      "side": "left"
    },
    {
      "id": 10,
      "planet": "neptune",
      "side": "right"
    },
    {
      "id": 11,
      "planet": "saturn",
      "side": "left"
    },
    {
      "id": 12,
      "planet": "saturn",
      "side": "right"
    },
    {
      "id": 13,
      "planet": "uranus",
      "side": "left"
    },
    {
      "id": 14,
      "planet": "uranus",
      "side": "right"
    },
    {
      "id": 15,
      "planet": "venus",
      "side": "left"
    },
    {
      "id": 16,
      "planet": "venus",
      "side": "right"
    }
  ],
  "points": {
    "2023-06-26": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-06-27": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-06-28": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-06-29": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-06-30": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-03": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-04": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-05": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-06": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-07": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-10": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-11": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-12": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-13": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-14": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-17": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-18": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-19": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-20": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ],
    "2023-07-21": [
      {
        "id": 1,
        "planet": "earth",
        "side": "left",
        "value": 0
      },
      {
        "id": 2,
        "planet": "earth",
        "side": "right",
        "value": 0
      },
      {
        "id": 3,
        "planet": "jupiter",
        "side": "left",
        "value": 0
      },
      {
        "id": 4,
        "planet": "jupiter",
        "side": "right",
        "value": 0
      },
      {
        "id": 5,
        "planet": "mars",
        "side": "left",
        "value": 0
      },
      {
        "id": 6,
        "planet": "mars",
        "side": "right",
        "value": 0
      },
      {
        "id": 7,
        "planet": "mercury",
        "side": "left",
        "value": 0
      },
      {
        "id": 8,
        "planet": "mercury",
        "side": "right",
        "value": 0
      },
      {
        "id": 9,
        "planet": "neptune",
        "side": "left",
        "value": 0
      },
      {
        "id": 10,
        "planet": "neptune",
        "side": "right",
        "value": 0
      },
      {
        "id": 11,
        "planet": "saturn",
        "side": "left",
        "value": 0
      },
      {
        "id": 12,
        "planet": "saturn",
        "side": "right",
        "value": 0
      },
      {
        "id": 13,
        "planet": "uranus",
        "side": "left",
        "value": 0
      },
      {
        "id": 14,
        "planet": "uranus",
        "side": "right",
        "value": 0
      },
      {
        "id": 15,
        "planet": "venus",
        "side": "left",
        "value": 0
      },
      {
        "id": 16,
        "planet": "venus",
        "side": "right",
        "value": 0
      }
    ]
  }
}
