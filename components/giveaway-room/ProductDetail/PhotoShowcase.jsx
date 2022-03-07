import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const PhotoShowcase = ({ products }) => {
  // const defaultImage = products[0].photoUrl[0].url;
  const defaultImage = '/images/sepatu.jpg';
  let photoUrl = [];
  const [photoProduct, setPhotoProduct] = useState({});

  products.map((product) => {
    photoUrl = product.photoUrl;
    // console.log(product.photoUrl);
  });
  console.log(photoUrl);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', minWidth: '400px' }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        autoPlay={false}
      >
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={defaultImage} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoShowcase;
