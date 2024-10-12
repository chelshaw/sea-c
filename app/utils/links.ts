export interface Link {
  title: string;
  description?: string;
  partial?: string;
  slug: string;
  url?: string;
  cta?: string;
}

export const resources: Record<string, Link> = {
  // zine 01
  a01a: {
    title: 'Characteristics of anger',
    description:
      'This short article outlines the differences between anger and rage -- highlighting the usefulness of anger, and the danger of rage.',
    url: 'https://www.counselling-directory.org.uk/memberarticles/healing-anger-the-differences-between-anger-and-rage',
    slug: 'a01a',
    cta: 'Read the article',
  },
  a03q: {
    title: 'Find your climate superpower',
    partial: 'a03q',
    url: 'https://jpydatnf1hz.typeform.com/to/pUIM6hoy?typeform-source=wecanfixit.substack.com',
    slug: 'a03q',
    cta: 'Take the quiz',
  },
  a04v: {
    title: "Check what's on your ballot",
    partial: 'a04v',
    url: 'https://www.vote411.org/',
    slug: 'a04v',
    cta: "Get your voter's guide",
  },
  a05t: {
    title: 'Come back together',
    description: 'Wednesday Oct 16 from 6:30p - 7:30p at Tantra',
    slug: 'a05t',
    url: 'https://calendarlink.com/event/3Fy8K',
    cta: 'Add to your calendar',
  },
};

function mapZines(resourceIds: string[]) {
  return resourceIds.map((key) => resources[key]).filter((r) => !!r);
}

export const allZines = (): Record<string, Link[]> => {
  return {
    '01': mapZines(['a01a', 'a03q', 'a04v', 'a05t']),
  };
};
