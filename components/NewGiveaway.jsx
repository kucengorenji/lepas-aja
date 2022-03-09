import CardRoom from './CardRoom';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
];

export default function NewGiveaway({ data }) {
  return (
    <section className="mt-14 w-full max-w-[1200px]">
      <h1 className="mb-8 text-4xl font-bold tracking-wider text-center text-red-600">
        Giveaway Terbaru
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
