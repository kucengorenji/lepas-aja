import CardRoom from './CardRoom';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

export default function NewGiveaway({ data }) {
  return (
    <section className="mt-5 w-full max-w-[950px]">
      <h1 className="font-bold mb-5 text-red-600 text-center text-4xl">
        NEW GIVEAWAY
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
