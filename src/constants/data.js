const motto = '"Making Functional Beautiful"';
const model = 'No Space Left presents: Model Lev';
const description = 'Elegantly designed, perfect for any collector.';

const about = [
  {
    title: 'Origin',
    subtitle: 'Our Path',
    desc1:
      'No Space Left started with a mission to utilize unique technologies and minimalistic design to represent our vision of the future.',
    desc2:
      'The vision of our company is to revolutionize modernity. We strive to accomplish this through the inspiration from previous inventions and present technologies. The mission is to leave an impact on people by sharing our ideas in the fields of Design and Technology and hopefully create a positive influence. With No Space Left... The future starts now.',
  },
];

const product = [
  {
    title: 'No Space Left',
    model: 'Model: Lev',
    description:
      'The model Lev is a display device that uses magnetic "Levitation" technology to make any object float. Imagine your most loved item being in display in a different way to your guests. With the Lev show off your most precious items in style.',
    details: {
      platform:
        'The Lev platform has a layer of high quality black velvet, the same used for luxury carpets.',
      base: 'The Lev base is contructed from darkwood, the unique material makes the Lev durable. Another benefit of using darkwood is the ability to provide a luxurious and dramatic feel to any room.',
    },
    weightCapacity: 'Able to hold up to 400g.',
    dimensions: {
      platform: {
        height: '7.6 in.',
        width: '5.5 in.',
        length: '5.5 in.',
      },
      base: {
        height: '4.7 in.',
        width: '7.8 in.',
        length: '11.8 in.',
      },
    },
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export { motto, model, description, about, product };
