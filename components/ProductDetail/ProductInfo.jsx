const ProductInfo = (props) => {
  const data = props.data;
  return (
    <div>
      <div>
        <ul>
          {data.map((product) => {
            return (
              <li>
                <button>{product.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <p>{props.descrption}</p>
    </div>
  );
};

export default ProductInfo;
