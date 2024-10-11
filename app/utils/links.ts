export interface Link {
  title: string;
  description: string;
  slug: string;
  url?: string;
  cta?: string;
}

export const resources: Record<string, Link> = {
  // zine 01
  a01a: {
    title: 'Characteristics of anger',
    description: '',
    url: 'https://www.counselling-directory.org.uk/memberarticles/healing-anger-the-differences-between-anger-and-rage',
    slug: 'a01a',
    cta: 'Read the article',
  },
  a03q: {
    title: 'Find your climate superpower',
    description: '',
    url: 'https://www.notion.so/Choose-Your-Own-Adventure-Climate-action-1185268d281f80c883c1fa4621543663',
    slug: 'a03q',
    cta: 'Take the quiz',
  },
  a04v: {
    title: 'Check your voter registration',
    description: '',
    url: 'https://www.vote411.org/',
    slug: 'a04v',
    cta: '',
  },
  a05t: {
    title: 'Come back together',
    description: '',
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
