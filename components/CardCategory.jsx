export default function CardCategory(props) {
  return (
    <div className="hover:scale-125">
      <div className="w-[100px] h-[100px] rounded-lg shadow-lg p-4  bg-[#DC2F2F]">
        <img
          src={props.src}
          alt={props.name}
          className="mx-auto object-cover w-[50px] rounded-t-lg"
        />
        <p className="mt-2 text-center text-white">{props.name}</p>
      </div>
      <p className="p-2 text-center text-ruddy-pink">{props.title}</p>
    </div>
  );
}
