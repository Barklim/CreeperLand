const getCaseIcon = (num: number) => ({
  // eslint-disable-next-line import/no-dynamic-require, global-require
  src: require(`../../assets/img/case${num}.png`).default,
  alt: 'case icon',
});

const caseIcons = {
  case_1: getCaseIcon(1),
  case_2: getCaseIcon(2),
  case_3: getCaseIcon(3),
  case_4: getCaseIcon(4),
};

const getShopIcon = (name: string) => ({
  // eslint-disable-next-line import/no-dynamic-require, global-require
  src: require(`../../assets/img/${name}.png`).default,
  alt: `${name} icon`,
});

const shopIcons = {
  creeper: getShopIcon('creeper'),
  enderman: getShopIcon('enderman'),
  blaze: getShopIcon('blaze'),
  wither: getShopIcon('wither'),
};

export const icons = {
  ...caseIcons,
  ...shopIcons,
};

export type IconType = keyof typeof icons;
