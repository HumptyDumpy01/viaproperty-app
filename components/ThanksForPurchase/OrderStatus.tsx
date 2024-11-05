'use client';

/*type OrderStatusType = {
  // children: ReactNode;
}*/

import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Tooltip from '@/components/Layout/Tooltip/Tooltip';
import { useState } from 'react';

export default function OrderStatus(/*{  }: OrderStatusType*/) {
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(false);
  return (
    <>
      <div className={`relative w-fit`}>
        <ActivityDetail customContainerClasses={``}
                        messageFont={`text-[19px] font-medium`}
                        trashCanVisibility={false} circleColor={`emptyBorderRed`}
                        iconType={
                          AccountActivityIconsTypeEnum.loading} date={`Status`}
                        message={`Pending`} />

        <div>
          <button onClick={() => setQuestionMarkVisibility(prevState => !prevState)} type={`button`}
                  className={`absolute top-6 -right-9`}>
            <ViapropertyIcon icon={`questionMark`} />
          </button>
          <Tooltip
            setQuestionMarkVisibility={setQuestionMarkVisibility}
            questionMarkVisibility={questionMarkVisibility}
            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quaerat.`} />
        </div>
      </div>
    </>
  );
}
