import { Album, Category } from './types';
import album01photo01 from '../images/gallery/album-01_photo-01.jpg';
import album01photo02 from '../images/gallery/album-01_photo-02.jpg';
import album01photo03 from '../images/gallery/album-01_photo-03.jpg';
import album01photo04 from '../images/gallery/album-01_photo-04.jpg';
import album01photo05 from '../images/gallery/album-01_photo-05.jpg';
import album02photo01 from '../images/gallery/album-02_photo-01.jpeg';
import album02photo02 from '../images/gallery/album-02_photo-02.jpeg';
import album03photo01 from '../images/gallery/album-03_photo-01.jpg';
import album03photo02 from '../images/gallery/album-03_photo-02.jpg';
import album03photo03 from '../images/gallery/album-03_photo-03.jpg';
import album03photo04 from '../images/gallery/album-03_photo-04.jpg';
import album03photo05 from '../images/gallery/album-03_photo-05.jpg';
import album04photo01 from '../images/gallery/album-04_photo-01.jpg';
import album04photo02 from '../images/gallery/album-04_photo-02.jpg';
import album04photo03 from '../images/gallery/album-04_photo-03.jpg';
import album05photo01 from '../images/gallery/album-05_photo-01.jpeg';
import album05photo02 from '../images/gallery/album-05_photo-02.jpeg';
import album05photo03 from '../images/gallery/album-05_photo-03.jpeg';
import album05photo04 from '../images/gallery/album-05_photo-04.jpeg';
import album05photo05 from '../images/gallery/album-05_photo-05.jpeg';
import album06photo01 from '../images/gallery/album-06_photo-01.jpg';
import album06photo02 from '../images/gallery/album-06_photo-02.jpg';
import album06photo03 from '../images/gallery/album-06_photo-03.jpg';
import album06photo04 from '../images/gallery/album-06_photo-04.jpg';
import album07photo01 from '../images/gallery/album-07_photo-01.jpeg';
import album07photo02 from '../images/gallery/album-07_photo-02.jpeg';
import album08photo01 from '../images/gallery/album-08_photo-01.jpg';
import album08photo02 from '../images/gallery/album-08_photo-02.jpg';
import album08photo03 from '../images/gallery/album-08_photo-03.jpg';
import album09photo01 from '../images/gallery/album-09_photo-01.jpg';
import album09photo02 from '../images/gallery/album-09_photo-02.jpg';
import album10photo01 from '../images/gallery/album-10_photo-01.jpeg';
import album10photo02 from '../images/gallery/album-10_photo-02.jpeg';
import album11photo01 from '../images/gallery/album-11_photo-01.jpg';
import album11photo02 from '../images/gallery/album-11_photo-02.jpg';
import album11photo03 from '../images/gallery/album-11_photo-03.jpg';
import album12photo01 from '../images/gallery/album-12_photo-01.jpg';
import album12photo02 from '../images/gallery/album-12_photo-02.jpg';
import album12photo03 from '../images/gallery/album-12_photo-03.jpg';
import album12photo04 from '../images/gallery/album-12_photo-04.jpg';
import album13photo01 from '../images/gallery/album-13_photo-01.jpg';
import album13photo02 from '../images/gallery/album-13_photo-02.jpg';
import album13photo03 from '../images/gallery/album-13_photo-03.jpg';
import album13photo04 from '../images/gallery/album-13_photo-04.jpg';
import album13photo05 from '../images/gallery/album-13_photo-05.jpg';

const albumsData: Album[] = [
  {
    id: 1,
    name: 'משפחת אטיה המקסימה',
    category: Category.Family,
    photos: [
      album01photo01,
      album01photo02,
      album01photo03,
      album01photo04,
      album01photo05,
    ],
  },
  {
    id: 2,
    name: 'אגם המהממת',
    category: Category.Children,
    photos: [
      album02photo01,
      album02photo02,
    ],
  },
  {
    id: 3,
    name: 'אימרי ושי לי המתוקות',
    category: Category.Children,
    photos: [
      album03photo01,
      album03photo02,
      album03photo03,
      album03photo04,
      album03photo05,
    ],
  },
  {
    id: 4,
    name: 'אגם וריו הכובשים',
    category: Category.Children,
    photos: [
      album04photo01,
      album04photo02,
      album04photo03,
    ],
  },
  {
    id: 5,
    name: 'משפחת זהר היפה',
    category: Category.Family,
    photos: [
      album05photo01,
      album05photo02,
      album05photo03,
      album05photo04,
      album05photo05,
    ],
  },
  {
    id: 6,
    name: 'ליאם הצדיק',
    category: Category.Concept,
    photos: [
      album06photo01,
      album06photo02,
      album06photo03,
      album06photo04,
    ],
  },
  {
    id: 7,
    name: 'מיכאל המלאך',
    category: Category.Concept,
    photos: [
      album07photo01,
      album07photo02,
    ],
  },
  {
    id: 8,
    name: 'הילדים המתוקים של רחל',
    category: Category.Children,
    photos: [
      album08photo01,
      album08photo02,
      album08photo03,
    ],
  },
  {
    id: 9,
    name: 'הויקינג הצעיר',
    category: Category.Concept,
    photos: [
      album09photo01,
      album09photo02,
    ],
  },
  {
    id: 10,
    name: 'ספיידרמן הקטן',
    category: Category.Concept,
    photos: [
      album10photo01,
      album10photo02,
    ],
  },
  {
    id: 11,
    name: 'אושרי המתאגרף',
    category: Category.Concept,
    photos: [
      album11photo01,
      album11photo02,
      album11photo03,
    ],
  },
  {
    id: 12,
    name: 'ליאם הראפר',
    category: Category.Children,
    photos: [
      album12photo01,
      album12photo02,
      album12photo03,
      album12photo04,
    ],
  },
  {
    id: 13,
    name: 'ילדת טבע',
    category: Category.Children,
    photos: [
      album13photo01,
      album13photo02,
      album13photo03,
      album13photo04,
      album13photo05,
    ],
  },
];

export {
  albumsData,
};
