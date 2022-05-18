enum Category {
  All = 'כל הקטגוריות',
  Family = 'צילומי משפחה',
  Children = 'צילומי ילדים',
  Concept = 'צילומי קונספט',
}

enum Device {
  Desktop,
  Tablet,
  Mobile,
}

type Album = {
  id: number,
  name: string,
  category: Category,
  photos: string[],
};

type ResponsiveImage = Record<Device, string>;

export {
  Category,
  Device,
};

export type {
  Album,
  ResponsiveImage,
};
