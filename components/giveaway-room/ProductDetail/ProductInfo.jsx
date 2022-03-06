const ProductInfo = ({ products }) => {
  console.log(products);

  const filteredProduct = products.filter((product) => {
    return product;
  });
  return (
    <div className="flex my-2 max-w-3xl">
      <div>
        <ul className="flex-column bg-ruddy-pink rounded-lg">
          {products.map((product) => (
            <li>
              <button className="bg-white p-1 m-2 rounded text-ruddy-pink w-20">
                {product.name}
              </button>
            </li>
          ))}
          <li>
            <button className="bg-ruddy-pink p-1 m-2 rounded text-white w-20">
              test asdfsa
            </button>
          </li>
        </ul>
      </div>
      {products.map((product) => {
        return (
          <div className=" ml-3 p-3 bg-ruddy-pink text-white w-full h-auto rounded-lg">
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfo;
