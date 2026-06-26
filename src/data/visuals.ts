/**
 * Research entry photography.
 */
export interface Visual {
  src: string;
  alt: string;
  pos?: string;
}

export const visuals: Record<string, Visual> = {
  'social-simulation': {
    src: '/images/research/social-simulation.png',
    alt: 'AI social simulation: prison world map with agent conversations and audit UI',
    pos: 'center center',
  },
  'persuasion-pipeline': {
    src: '/images/research/persuasion-pipeline.jpg',
    alt: 'Web-fed offset press printing a newspaper',
    pos: 'center 38%',
  },
  'disaster-resilience': {
    src: '/images/research/disaster-resilience.jpg',
    alt: 'Hurricane seen from the International Space Station',
  },
  'ecotourism-platform': {
    src: '/images/research/ecotourism-platform.jpg',
    alt: 'Zebras on savanna hills in Laikipia, Kenya',
  },
};
