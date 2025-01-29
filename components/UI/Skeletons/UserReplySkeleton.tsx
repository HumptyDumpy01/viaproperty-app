import { Skeleton } from '@mui/material';

export default function UserReplySkeleton() {
  return (
    <>
      <div className={`pl-12 flex flex-col gap-4 border-l-2 border-r-zinc-200 `}>
        <div className={`flex gap-4 items-center`}>
          <Skeleton variant={`circular`} width={71} height={71} animation={`wave`} />
          <div className={`flex flex-col w-[150px]`}>
            <h3><Skeleton height={30} width={`80%`} /></h3>
            <span><Skeleton height={25} width={`100%`} /></span>
          </div>
        </div>
        <div className={`flex flex-col gap-1`}>
          <p><Skeleton height={20} width={`50%`} /></p>
          <p><Skeleton height={20} width={`30%`} /></p>
        </div>
      </div>
    </>
  );
}
