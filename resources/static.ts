export interface Static {
  encounters: Encounter[];
}

interface Encounter {
  name: string;
  mechanics: Mechanic[];
}

interface Mechanic {
  name: string
  enabled: string[];
}

export const staticGroup: Static = {
  encounters: [
    {
      name: 'P1S',
      mechanics: [
        {
          name: 'P1S Tile Positions',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Warder\'s Wrath',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Shackles of Companionship',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Shackles of Loneliness',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Aetherial Shackles Callout',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Shining Cells',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Slam Shut',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Gaoler\'s Flail',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Heavy Hand',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Pitiless Flail',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Intemperate Torment Direction',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Hot/Cold Spell',
          enabled: [],
        },
        {
          name: 'P1S Powerful Light/Fire',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Shackles of Time',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
        {
          name: 'P1S Fourfold Shackles',
          enabled: [
            'Kirtanei Blackscale',
          ],
        },
      ]
    },
    {
      name: 'P2S',
      mechanics: [

      ]
    }
  ]
}

