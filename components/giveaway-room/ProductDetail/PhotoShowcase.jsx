const PhotoShowcase = ({ products }) => {
  const shit = products[0].photoUrl[0].url;
  const newArray = [];

  products.map((product) => {
    newArray = product.photoUrl;
  });

  console.log(newArray);
  newArray.map((item) => {
    console.log(item.url);
  });

  return (
    <div>
      <img
        src={shit}
        alt=""
        className="border-ruddy-pink border-2 mx-auto max-w-sm max-h-sm shadow-lg"
      />
      {/* {test.map((item, index) => {
        return (
          <img
            key={index}
            src={item.url}
            alt=""
            className="border-ruddy-pink border-2 mx-auto max-w-sm max-h-sm"
          />
        );
      })} */}
    </div>
  );
};

export default PhotoShowcase;
