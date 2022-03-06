const PhotoShowcase = ({ products }) => {
  const productList = products.map((product) => {
    return product.photoUrl;
  });

  productList.map((image) => {
    console.log(image);
  });
  return (
    <div>
      <img src="" alt="" className="border-ruddy-pink border-2 mx-auto" />
    </div>
  );
};

export default PhotoShowcase;
