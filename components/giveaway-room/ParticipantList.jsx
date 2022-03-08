import { user } from "../../data/user";
import CardParticipant from "../ParticipantLists/CardParticipants";

export default function ParticipantList({ data }) {
  const participantLists = data;
  console.log(data);

  return (
    <div className="grow text-center">
      <h1 className="font-bold text-[#DF8D9F] text-center text-4xl m-4">
        Participant List
      </h1>
      <div>
        <div className="grid grid-cols-4 gap-8">
            {participantLists.map((data, index) => {
                return(
                    <CardParticipant
                        key={index}
                        name={data.name}
                        imageUrl={data.photoUrl}
                    />
                )
            })}
        </div>
        {/* <Stack spacing={2}>
            <Typography>
                <div className="grid grid-cols-4 gap-8">
                    {pageContent}
                    {page}
                </div>
            </Typography>
            <Pagination
                count={countPage}
                page={page}
                onChange={handleChange}
            />
        </Stack> */}
      </div>
    </div>
  );
}
