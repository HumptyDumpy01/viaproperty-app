// 'use client';

import { PropertyType } from '@/utils/types/PropertyType';

type SearchResultsMetricsType = {
  results: string;
  handleResetFilter: () => void;
  properties: PropertyType[];
  // children: ReactNode;
}

export default function SearchResultsMetrics({ results, handleResetFilter, properties }: SearchResultsMetricsType) {
  return (
    <>
      <div className={`mt-3.5 mb-4 flex items-center gap-4`}>
        <p className={`text-sm text-zinc-500`}>Search results: <span>{results}</span></p>
        {properties.length < 9 && (
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
