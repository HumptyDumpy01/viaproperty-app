// 'use client';

/*type FilterHeadingType = {
  // children: ReactNode;
}*/

export default function FilterHeading(/*{  }: FilterHeadingType*/) {

  return (
    <>
      <div className={`flex items-center justify-between mb-5`}>
        <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-3xl`}>Filters</h1>
        <button className={`text-white font-semibold uppercase bg-linear-main-red p-1 px-2 rounded`}>Apply</button>
      </div>
    </>
  );
}
