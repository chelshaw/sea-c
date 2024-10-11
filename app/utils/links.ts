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
    description:
      'This short article outlines the differences between anger and rage -- highlighting the usefulness of anger, and the danger of rage.',
    url: 'https://www.counselling-directory.org.uk/memberarticles/healing-anger-the-differences-between-anger-and-rage',
    slug: 'a01a',
    cta: 'Read the article',
  },
  a03q: {
    title: 'Find your climate superpower',
    description:
      'Professor, climate scientist, and thoughtful human Kim Nicholas (who runs the We Can Fix It substack) put together this excellent and interactive resource for anyone to discover their climate superpower.',
    url: 'https://jpydatnf1hz.typeform.com/to/pUIM6hoy?typeform-source=wecanfixit.substack.com',
    slug: 'a03q',
    cta: 'Take the quiz',
  },
  a04v: {
    title: 'Check your voter registration',
    description:
      "As recently as August 26, 2024 Govornor Abbott has removed over 1 million people from voter rolls. Make sure that didn't include you, and then check out ",
    url: 'https://www.vote411.org/',
    slug: 'a04v',
    cta: 'Check your ballot and registration',
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
