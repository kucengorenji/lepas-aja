export default function CardCategory(props) {
  return (
    <div className="max-w-[150px] rounded-lg shadow-lg  bg-[#F0F0F0] hover:scale-125">
      <img
        src={props.src}
        alt={props.name}
        className="object-cover w-full rounded-t-lg"
      />
      <p className="p-2 text-center">{props.title}</p>
    </div>
  );
}
