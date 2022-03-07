import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const PhotoShowcase = ({ products }) => {
  const shit = products[0].photoUrl[0].url;
  let photoUrl = [];
  const [photoProduct, setPhotoProduct] = useState({});

  products.map((product) => {
    photoUrl = product.photoUrl;
    // console.log(product.photoUrl);
  });
  console.log(photoUrl);

  return (
    <div style={{ width: '450px', margin: '0 auto' }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        autoPlay={false}
      >
        <div>
          <img src={shit} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={shit} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={shit} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={shit} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={shit} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={shit} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoShowcase;
