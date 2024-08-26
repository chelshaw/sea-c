interface Links {
  [key: string]: {
    title: string;
    url: string;
  };
}

interface Collection {
  title: string;
  url: string;
  key: string;
}

export const redirectLinks: Links = {
  ffty: {
    url: 'https://fossilfueltreaty.org/',
    title: 'Fossil Fuel Treaty',
  },
  tfty: {
    url: 'https://350.org/',
    title: '350.org - Fighting for a future without fossil fuels',
  },
};

export const linkCollections: Links = {
  ffty: redirectLinks.ffty,
  tfty: redirectLinks.tfty,
};
