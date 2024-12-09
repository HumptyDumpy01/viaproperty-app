import { FormEvent, useEffect, useState } from 'react';
import LabelAndTextBadge from '@/components/UI/Badge/LabelAndTextBadge';
import MUICalendar from '@/components/UI/Calendar/MUICalendar';
import FoldList from '@/components/UI/FeatureList/FoldList';
import { slugifyText } from '@/utils/functions/slugifyText';
import { transformStrToNum } from '@/utils/functions/transformStrToNum';
import dayjs from 'dayjs';

export type PropertySidebarDetails = {
  price: string;
  onSale: {
    isOnSale: boolean;
    discount: number | null;
    newPrice: string | null;
  }
  propertyFor: 'rent' | 'sell';
  location: string;
  extraPricing: { title: string; price: number; }[] | []
}

export type ViapropertySidebarType = {
  propertyDetails: PropertySidebarDetails
}

export default function ViapropertySidebar({ propertyDetails }: ViapropertySidebarType) {
  const { price, onSale, propertyFor, location, extraPricing } = propertyDetails;

  const formattedPrice = transformStrToNum(price);
  const formattedNewPrice = onSale.newPrice ? transformStrToNum(onSale.newPrice) : 0;

  const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({});
  const [totalPrice, setTotalPrice] = useState<number>(onSale.isOnSale ? formattedNewPrice : formattedPrice);
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([dayjs(), dayjs().add(7, 'day')]);

  const discountAmount = onSale.isOnSale ? formattedPrice - formattedNewPrice : 0;

  const handleExtraChange = (extraName: string, isChecked: boolean) => {
    setSelectedExtras((prev) => ({ ...prev, [extraName]: isChecked }));
  };

  useEffect(() => {
    const extrasTotal = extraPricing.reduce((acc, extra) => {
      return acc + (selectedExtras[extra.title] ? extra.price : 0);
    }, 0);

    const rentalDays = dateRange[1].diff(dateRange[0], 'day');
    const rentalPrice = propertyFor === 'rent' ? (onSale.isOnSale ? formattedNewPrice : formattedPrice) * rentalDays : 0;

    if (propertyFor === 'rent') {
      setTotalPrice(rentalPrice + extrasTotal);
    } else {
      setTotalPrice(formattedNewPrice + extrasTotal);
    }

  }, [selectedExtras, formattedNewPrice, formattedPrice, onSale.isOnSale, extraPricing, dateRange, propertyFor]);

  const overallProperties = [
    {
      label: `Property Price ${propertyFor === `rent` ? `/` : ``}`,
      span: onSale.isOnSale ? String(onSale.newPrice) : String(price)
    },
    onSale.isOnSale ? {
      label: `Discount ${onSale.discount}`,
      span: `-${discountAmount}$`,
      type: `discount`
    } : null,
    ...extraPricing.map(extra => selectedExtras[extra.title] ? {
      label: extra.title,
      span: `${extra.price}$`
    } : null).filter(Boolean)
  ].filter(Boolean);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries());
    // @ts-ignore
    results.totalPrice = totalPrice;
    // resetting the form
    currObject.reset();
    // output
  }

  return (
    <div className={`border h-fit border-red-500 rounded-3xl p-7 w-full`}>
      <div className={`flex items-center justify-between mb-6`}>
        <div className={`flex gap-5 items-center`}>
          {onSale.isOnSale && (
            <>
              <span className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>
                ${onSale.newPrice}<span className={`text-sm`}>{propertyFor === `rent` ? `/day` : ``}</span>
              </span>
              <span className={`text-zinc-300 inline-block line-through`}>
                {price}
              </span>
            </>
          )}
          {!onSale.isOnSale && (
            <span className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>
              ${price}<span className={`text-sm`}>{propertyFor === `rent` ? `/day` : ``}</span>
            </span>
          )}
        </div>
        {onSale.isOnSale && (
          <span
            className={`inline-block text-[13px] font-semibold bg-linear-main-red text-white px-3 py-1 rounded-full`}>
            {onSale.discount}
          </span>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className={`bg-clip-text mb-4 text-transparent bg-linear-main-red font-bold text-3xl`}>
          Let&#39;s {propertyFor === `rent` ? `Rent` : `Buy`} it!
        </h2>
        <div className={`flex flex-col gap-3.5 mb-7 min-w-72`}>
          <LabelAndTextBadge label={`Location`} text={location.length > 60 ? location.slice(0, 60) + `..` : location} />
          <LabelAndTextBadge label={`Selling Options`}
                             text={propertyFor === `rent` ? `Rent a Property` : `Buy a Property`} />
          {propertyFor === `rent` && (
            <div className={`flex flex-col gap-3.5 justify-center min-w-72 mt-2`}>
              <div className={`cursor-pointer`}>
                <MUICalendar onChange={(newValue) => setDateRange(newValue)} />
              </div>
            </div>
          )}
        </div>
        {extraPricing.length > 0 && (
          <div className={`mb-6`}>
            <FoldList enableFold={false} type={`checkbox`} checkboxes={extraPricing.map((extra) => ({
              checkboxLabel: extra.title,
              checkboxName: slugifyText(extra.title),
              spanLabel: extra.price.toString(),
              onChange: (isChecked: boolean) => handleExtraChange(extra.title, isChecked)
            }))} label={`Extra Features`} />
          </div>
        )}
        {/*@ts-ignore*/}
        <FoldList type={`default`} defaultProperties={overallProperties} label={`Overall`} />
        <div className={`flex items-center justify-between mt-7 mb-3`}>
          <span className={`bg-clip-text text-2xl text-transparent bg-linear-main-red font-bold`}>Total</span>
          <span
            className={`bg-clip-text text-2xl text-transparent bg-linear-main-red font-bold`}>{totalPrice}$</span>
        </div>
        <div className={`w-full flex items-center`}>
          <button
            className={`bg-linear-main-red flex text-white rounded-2xl w-full text-center justify-center text-xl font-bold px-5 py-4 mt-7 transition-all duration-200 hover:animate-pulse`}>
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
}