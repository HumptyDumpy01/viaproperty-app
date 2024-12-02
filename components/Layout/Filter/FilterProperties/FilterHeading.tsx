'use client';

/*type FilterHeadingType = {
  // children: ReactNode;
}*/

import { FormEvent } from 'react';

export default function FilterHeading(/*{  }: FilterHeadingType*/) {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Filter heading form submitted');
  }


  return (
    <>
      <form onSubmit={handleSubmit} className={`flex items-center justify-between mb-5`}>
        <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-3xl`}>Filters</h1>
        <button className={`text-white font-semibold uppercase bg-linear-main-red p-1 px-2 rounded`}>Apply</button>
      </form>
    </>
  );
}
