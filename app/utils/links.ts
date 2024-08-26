interface Links {
  [key: string]: {
    title: string;
    url: string;
  };
}

export const redirectLinks: Links = {
  ffty: {
    url: 'https://fossilfueltreaty.org/',
    title: 'Fossil Fuel Treaty',
  },
};

export const linkCollections: Links = {
  ffty: redirectLinks.ffty,
};
