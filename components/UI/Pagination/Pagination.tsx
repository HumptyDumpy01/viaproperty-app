import PaginationButton from '@/components/UI/Pagination/PaginationButton';

type PaginationType = {
  showing: number;
  total: number;
  pages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ showing, total, pages, onPageChange }: PaginationType) {
  return (
    <>
      <div className={`flex items-center flex-col justify-center mt-14`}>
        <div className={`flex gap-3`}>
          {Array.from({ length: pages }, (_, i) => (
            <PaginationButton key={i} active={i === 0} page={i + 1} onClick={() => onPageChange(i + 1)} />
          ))}
        </div>
        <p className={`mt-3 text-sm`}>Showing <span>{showing}</span> of <span>{total}</span> results</p>
      </div>
    </>
  );
}