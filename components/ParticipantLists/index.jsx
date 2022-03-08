import { Card, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { user } from "../../data/user";
import CardParticipant from "./CardParticipants";

const PER_PAGE = 20;

const ParticipantLists = () => {
    const participantLists = user;
    console.log(participantLists);
    // const countPage = Math.ceil(user.length / 20);
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(20);
    // const [page, setPage] = useState(1);
    // const [pageContent, setPageContent] = useState();
    // const handleChange = async (event, value) => {
    //     setPage(value);
    //     setStart(value*PER_PAGE - PER_PAGE);
    //     setEnd(value*PER_PAGE);
    // }

    // useEffect(() => {

    //     const participantSlice = participantLists.slice(start, end);

    //     console.log(participantSlice);

    //     const tempPage = participantSlice.map((data, index=start) => {
    //         if(index >= start && index < end){
    //             return(
    //                 <CardParticipant
    //                     key={index}
    //                     name={data.name}
    //                     imageUrl={data.image}
    //                 />
    //             )
    //         }
    //     });
    //     setTimeout(() => {
    //         setPageContent(tempPage);
    //         console.log(pageContent);
    //     }, 1000)

    // }, [page])

    // const participantSlices = participantLists.slice(start, end);
    // console.log(participantSlices);

    // const getPage = participantSlices.map((data, index=start) => {
    //     console.log('he');
    //     if(index >= 0 && index < end){
    //         return(
    //             <CardParticipant
    //                 key={index}
    //                 name={data.name}
    //                 imageUrl={data.image}
    //             />
    //         )
    //     }
    // });

    // useEffect(() => {
    //     // setPageContent(getPage);
    //     // console.log(pageContent);
    //     setTimeout(() => {
    //         setPageContent(getPage);
    //         console.log(pageContent);   
    //     }, 1000)
    // }, []);

    return (
        <div className="flex flex-col">
            <div className="flex justify-center mt-5 mb-12">
                <h1 className="text-4xl font-bold text-[#DF8D9F]">Participant Lists</h1>
            </div>
            
            <div>
                <div className="grid grid-cols-4 gap-8">
                    {participantLists.map((data, index) => {
                        return(
                            <CardParticipant
                                key={index}
                                name={data.name}
                                imageUrl={data.image}
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
};
 
export default ParticipantLists;