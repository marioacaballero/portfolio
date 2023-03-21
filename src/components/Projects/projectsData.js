import pokemon from '../Data/Projects/PokeFRV.gif';
import cane from '../Data/Projects/CaneFood.gif';
import baco from '../Data/Projects/bacofusion.gif';
import caneadm from '../Data/Projects/NestJs.gif';

const items = [
  {
    key: 1,
    src: pokemon,
    altText: 'pokemon',
    caption: 'Slide 1',
    name: 'Pokemon FRVersion',
    description:
      'React, Redux, Ant Design, JavaScript, Express, Sequelize, PostgreSQL',
    repo: 'https://github.com/marioacaballero/Pokemon-RFVersion-PI',
  },
  {
    key: 2,
    src: cane,
    altText: 'cane',
    caption: 'Slide 2',
    name: 'Cane Food',
    description:
      'React, Redux, Ant Design, JavaScript, Express, Sequelize, PostgreSQL',
    repo: 'https://github.com/marioacaballero/Cane-Food-e-commerce',
    demo: 'https://cane-food.vercel.app/',
  },
  {
    key: 3,
    src: baco,
    altText: 'baco',
    caption: 'Slide 3',
    name: 'Baco Fusion',
    description: 'React, Redux, Ant Design, Typescript',
    repo: 'https://github.com/marioacaballero/Baco-Fusion-App',
    demo: 'http://bacofusion.com.ar',
  },
  {
    key: 4,
    src: caneadm,
    altText: 'caneadm',
    caption: 'Slide 3',
    name: 'caneadm',
    description: 'NestJs, Typescript, Node',
    repo: 'https://github.com/marioacaballero/caneadm',
  },
];

export default items;
