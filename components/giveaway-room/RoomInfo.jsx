export default function RoomInfo() {
  return (
    <div className="p-5 bg-grey basis-1/4 text-center">
      <div className="p-2 bg-slate-200 rounded-lg ">
        <p>countdown</p>
      </div>
      <div className="flex justify-between">
        <div className="p-2  px-6 bg-slate-200 m-2 rounded-lg">
          <p className="font-bold text-xl">03</p> <p>day</p>
        </div>
        <div className="p-2  px-6 bg-slate-200 m-2 rounded-lg">
          <p className="font-bold text-xl">03</p> <p>Hour</p>
        </div>
        <div className="p-2  px-6 bg-slate-200 m-2 rounded-lg">
          <p className="font-bold text-xl">03</p> <p>Minute</p>
        </div>
        <div className="p-2  px-6 bg-slate-200 m-2 rounded-lg">
          <p className="font-bold text-xl">03</p> <p>Second</p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-lg p-3">
        <h3 className="text-left font-bold px-8 py-1 text-xl">
          Total Peserta:
        </h3>
        <h2 className="text-left font-bold px-8 text-3xl">12 Peserta</h2>
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
