import PaginationButton from '@/components/UI/Pagination/PaginationButton';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';

type PaginationType = {
  showing: number;
  total: number;
  pages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};

export default function Pagination({ showing, total, pages, onPageChange, currentPage }: PaginationType) {
  return (
    <>
      <div className={`flex items-center flex-col justify-center mt-14`}>
        <div className={`flex gap-3`}>
          {Array.from({ length: pages }, (_, i) => (
            <PaginationButton key={i} active={i + 1 === currentPage} page={i + 1} onClick={() => {
              scrollIntoViewFunc(``, true);
              return onPageChange(i + 1);
            }} />
          ))}
        </div>
        <p className={`mt-3 text-sm`}>Showing <span>{showing}</span> of <span>{total}</span> results</p>
      </div>
    </>
  );
}