export default function CardCategory(props) {
  return (
    <div className="hover:scale-125">
      <div className="min-w-[100px] rounded-lg shadow-lg  bg-[#F0F0F0]">
        <img
          src={props.src}
          alt={props.name}
          className="object-cover w-full rounded-t-lg"
        />
      </div>
      <p className="p-2 text-center text-ruddy-pink">{props.title}</p>
    </div>
  );
}
