// 'use client';

type SearchResultsMetricsType = {
  results: number;
  // children: ReactNode;
}

export default function SearchResultsMetrics({ results }: SearchResultsMetricsType) {
  return (
    <>
      <div className={`mt-3.5 mb-4`}>
        <p className={`text-sm text-zinc-500`}>Search results: <span>{results}</span></p>
      </div>
    </>
  );
}
