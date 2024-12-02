// 'use client';

import { PropertyType } from '@/utils/types/PropertyType';

type SearchResultsMetricsType = {
  results: string;
  handleResetFilter: () => void;
  properties: PropertyType[];
  loading: boolean;
  // children: ReactNode;
}

export default function
  SearchResultsMetrics({
                         results,
                         handleResetFilter,
                         properties,
                         loading
                       }: SearchResultsMetricsType) {
  return (
    <>
      <div className={`mt-3.5 mb-4 flex items-center gap-4`}>
        <p className={`text-sm text-zinc-500`}>Search results: <span>{results}</span></p>
        {properties.length < 9 && !loading && (
          <button
            onClick={() => {
              handleResetFilter();
            }}
            className={`text-sm text-zinc-500 underline w-fit`}>Reset search
          </button>
        )}
      </div>
    </>
  );
}
