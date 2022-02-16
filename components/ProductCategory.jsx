import CardCategory from './CardCategory';
import { category } from '../data/category';

export default function ProductCategory({categoryDataFunc}) {
  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <h1 className="font-bold text-ruddy-pink text-center text-4xl">
        Product Category
      </h1>
      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {category.map((data, index) => {
          return (
            <button
              onClick={() => categoryDataFunc(index+1)}
              //index+1 -> bisa di ganti API filter dari backend
            >
              <CardCategory
                key={index}
                name={data.name}
                title={data.title}
                src={data.image}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
