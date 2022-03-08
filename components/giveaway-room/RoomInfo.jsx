import CountDown from "./CountDown";

export default function RoomInfo({data}) {

  const finishAt = data.finishAt*1000;
  const totalParticipants = data.participants.length;

  
  return (
    <div className="p-5 bg-grey basis-1/4 text-center">
      <CountDown
        finishTime={finishAt}
      />
      <div className="w-full bg-slate-200 rounded-lg p-3">
        <h3 className="text-left font-bold px-8 py-1 text-xl">
          Total Peserta:
        </h3>
        <h2 className="text-left font-bold px-8 text-3xl"> {totalParticipants} Peserta</h2>
        <h3 className="text-left font-bold px-8 py-1 text-xl">
          Syarat & Ketentutan:
        </h3>
        <ol className="text-left font-bold px-8 py-1">
          <li>1. Dharma Gans</li>
          <li>2. Dharma Gans</li>
          <li>3. Dharma Gans</li>
          <li>4. Dharma Gans</li>
        </ol>
      </div>
    </div>
  );
}
