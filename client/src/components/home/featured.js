import Carrousel from 'utils/carrousel';

const Featured = () => {
  const corrouselItems = [
    {
      img: '/images/featured/featured_home.jpg',
      lineOne: 'CALLA LIMITED 2021',
      lineTwo: 'Custom Designs',
      lineTitle: 'Show Now',
      linkTo: '/shop',
    },
    {
      img: '/images/featured/featured_home_2.jpg',
      lineOne: 'CALLA COUTURE 2021',
      lineTwo: 'Custom Designs',
      lineTitle: 'View Catalogue',
      linkTo: '/shop',
    },
    {
      img: '/images/featured/featured_home_3.jpg',
      lineOne: 'CALLA COLLECTIONS 2021',
      lineTwo: 'Custom Designs',
      lineTitle: 'View Collections',
      linkTo: '/shop',
    },
  ];

  return (
    <div className='featured_container'>
      <Carrousel items={corrouselItems} />
    </div>
  );
};

export default Featured;
