import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductInfo({ id, products }) {
  const isProductExist = products[0] !== undefined;

  return (
    <div className="flex w-full min-w-l max-w-l p-2 sm:px-0 my-2">
      {isProductExist ? (
        <Tab.Group vertical>
          <Tab.List className="flex-column p-3 basis-1/4">
            {Object.values(products).map((product, idx) => {
              return (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg my-2 border border-white hover:scale-125 hover:ease-in-out duration-300',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-white ring-opacity-60',
                      selected
                        ? 'bg-red-600 text-white p-1'
                        : 'text-red-600  hover:border-red-600'
                    )
                  }
                >
                  {product.name}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="w-full m-2 border border-red-600 rounded-lg">
            {Object.values(products).map((product, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white p-3 m-1 rounded hover:bg-red-200 duration-300'
                )}
              >
                <p>{product.description}</p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      ) : (
        <div className="mx-auto my-11">
          belum ada product yang ditambahkan di event ini
        </div>
      )}
    </div>
  );
}
