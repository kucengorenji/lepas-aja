const CardParticipant = ({name, imageUrl}) => {
    return (
        <div className="flex flex-row border-2 border-gray-200 shadow-lg shadow-gray-400 rounded-lg px-3 py-5 items-center">
            <div className="mx-1">
                <img className="w-9/12 rounded-full" src={imageUrl} alt="" />
            </div>
            <div className="mx-1">
                <h1 className="font-bold text-md"> {name} </h1>
            </div>
        </div>
    );
}
 
export default CardParticipant;