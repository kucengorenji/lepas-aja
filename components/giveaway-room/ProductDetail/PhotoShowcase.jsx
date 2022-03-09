import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const PhotoShowcase = ({ products }) => {
  const defaultImage = '/images/sepatu.jpg';
  const photos = products.map((product) => {
    return product.photoUrl;
  });
  const isPhotoExist = photos[0] !== undefined;

  return (
    <div
      style={{ maxWidth: '500px', margin: '0 auto', minWidth: '400px' }}
      className="bg-red-600 rounded-lg "
    >
      {isPhotoExist ? (
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          autoPlay={false}
        >
          {photos.map((photo) => {
            return (
              <div className="">
                <img className="" alt={photo[0].alt} src={photo[0].url} />
                <p className="legend">{photo[0].title}</p>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div>
          <img src={defaultImage} />
          <p className="text-white legend">
            barang giveaway ini belum ada foto dari owner
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoShowcase;
