export default function CardCategory(props) {
  return (
    <div className="hover:scale-125">
      <div className="min-w-[50px] rounded-lg shadow-lg p-4  bg-[#DC2F2F]">
        <img
          src={props.src}
          alt={props.name}
          className="object-cover w-[50px] rounded-t-lg"
        />
      </div>
      <p className="p-2 text-center text-ruddy-pink">{props.title}</p>
    </div>
  );
}
