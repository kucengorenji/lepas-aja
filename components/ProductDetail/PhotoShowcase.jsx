const PhotoShowcase = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt=""
        className="border-ruddy-pink border-2 mx-auto"
      />
    </div>
  );
};

export default PhotoShowcase;
