import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

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
    <div>
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {photoUrl.map((item) => {
          <div>
            <img src={item.url} />
            <p className="legend">Legend 1</p>
          </div>;
        })}
      </Carousel>
    </div>
  );
};

export default PhotoShowcase;
