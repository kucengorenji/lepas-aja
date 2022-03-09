const CardParticipant = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-row items-center px-3 py-3 mt-4 border-2 border-gray-200 rounded-lg shadow-lg shadow-gray-400">
      <div className="mx-1">
        <img className="rounded-full w-[50px] h-[50px]" src={imageUrl} alt="" />
      </div>
      <div className="mx-2">
        <h1 className="font-semibold text-md"> {name} </h1>
      </div>
    </div>
  );
};

export default CardParticipant;
