const CardParticipant = ({ name, imageUrl }) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-row items-center px-3 py-3 mt-4 border-2 border-gray-200 rounded-lg shadow-lg shadow-gray-400">
      <div className="mx-1">
        <img className="rounded-full w-[50px] h-[50px]" src={imageUrl} alt="" />
=======
    <div className="flex flex-row border-2 border-gray-100 shadow-md shadow-gray-400 rounded-lg px-3 py-5">
      <div className="mx-1">
        <img className="w-9/12 rounded-full h-9/12 " src={imageUrl} alt="" />
>>>>>>> c301602bda927364dfcce3a940d20d6b94a96fbf
      </div>
      <div className="mx-2">
        <h1 className="font-semibold text-md"> {name} </h1>
      </div>
    </div>
  );
};

export default CardParticipant;
