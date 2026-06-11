/**
 * Research entry photography. Free-licensed sources (Wikimedia Commons):
 * - social-simulation: The Opte Project / Barrett Lyon, "Internet map",
 *   CC BY 2.5
 * - persuasion-pipeline: Tom T, "Web-fed offset press printing
 *   newspapers", CC BY 2.0
 * - disaster-resilience: NASA, "Hurricane Isabel from ISS"
 *   (public domain)
 * - ecotourism-platform: "Lolldaiga Conservancy, Kenya" (Laikipia),
 *   via Flickr, CC BY 2.0
 */
export interface Visual {
  src: string;
  alt: string;
  pos?: string;
}

export const visuals: Record<string, Visual> = {
  'social-simulation': {
    src: '/images/research/social-simulation.jpg',
    alt: 'Network visualization: thousands of glowing connected nodes on black',
    pos: 'center 22%',
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
