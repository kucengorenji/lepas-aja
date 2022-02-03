const ImageCarousel = ({ src }) => {
  return (
    <img className="object-cover w-full h-full" src={src} alt="slide-image" />
  );
};

export default ImageCarousel;
