import CardRoom from './CardRoom';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
];

export default function NewGiveaway({ data }) {
  return (
    <section className="mt-16 w-full max-w-[1200px]">
      <h1 className="mb-12 text-5xl font-black leading-7 text-center text-gray-800 md:leading-10">
        Lihat giveaway <br /> <span className="mt-4 text-red-600">terbaru</span>{' '}
        sekarang
      </h1>
      <Carousel breakPoints={breakPoints}>
        {data.map((item, index) => {
          return (
            <CardRoom
              key={index}
              id={item.id}
              name={item.name}
              owner={item.owner}
              src={item.photoUrl}
              location={item.location}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
