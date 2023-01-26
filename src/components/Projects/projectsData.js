import pokemon from '../Data/Projects/PokeFRV.gif';
import cane from '../Data/Projects/CaneFood.gif';
import baco from '../Data/Projects/bacofusion.gif';

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
];

export default items;
