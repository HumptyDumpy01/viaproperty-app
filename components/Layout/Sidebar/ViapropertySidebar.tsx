import { FormEvent, useEffect, useState } from 'react';
import LabelAndTextBadge from '@/components/UI/Badge/LabelAndTextBadge';
import MUICalendar from '@/components/UI/Calendar/MUICalendar';
import FoldList from '@/components/UI/FeatureList/FoldList';
import { slugifyText } from '@/utils/functions/slugifyText';
import { transformStrToNum } from '@/utils/functions/transformStrToNum';
import dayjs from 'dayjs';
import SnackbarMUI from '@/components/UI/Snackbar/SnackbarMUI';
import { rentPropertySchema } from '@/utils/schemas/rentPropertySchema';
import { sellPropertySchema } from '@/utils/schemas/sellPropertySchema';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { useRouter } from 'next/navigation';

export type PropertyOnSaleType = {
  isOnSale: boolean;
  discount: string | null;
  newPrice: string | null;
}

export type LandlordsContactsType = {
  initials: string;
  phones: string[];
  email: string;
}

export type LandlordDataType = {
  contacts: LandlordsContactsType[];
}

export type PropertySidebarDetails = {
  price: string;
  onSale: PropertyOnSaleType;
  propertyFor: PropertyForType;
  location: string;
  dataForCheckout: {
    propertyId: string;
    images: string[];
    title: string;
  }
  extraPricing: { title: string; price: number; }[] | []
  landlordData: LandlordDataType
}

export type ViapropertySidebarType = {
  propertyDetails: PropertySidebarDetails
}

export default function ViapropertySidebar({ propertyDetails }: ViapropertySidebarType) {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string>(``);

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);

  const { price, onSale, propertyFor, location, extraPricing } = propertyDetails;
  const { propertyId, images, title } = propertyDetails.dataForCheckout;

  const formattedPrice = transformStrToNum(price);
  const formattedNewPrice = onSale.newPrice ? transformStrToNum(onSale.newPrice) : formattedPrice;

  const initialExtrasState = extraPricing.map(extra => ({
    checked: false,
    label: extra.title,
    price: extra.price
  }));

  const [selectedExtras, setSelectedExtras] = useState(initialExtrasState);
  const [totalPrice, setTotalPrice] = useState<number>(onSale.isOnSale ? formattedNewPrice : formattedPrice);
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([dayjs(), dayjs().add(7, 'day')]);

  const discountAmount = onSale.isOnSale ? formattedPrice - formattedNewPrice : 0;

  const handleExtraChange = (extraName: string, isChecked: boolean) => {
    setSelectedExtras((prev) => prev.map(extra =>
      extra.label === extraName ? { ...extra, checked: isChecked } : extra
    ));
  };

  useEffect(() => {
    const extrasTotal = selectedExtras.reduce((acc, extra) => {
      return acc + (extra.checked ? extra.price : 0);
    }, 0);

    const rentalDays = dateRange[1].diff(dateRange[0], 'day');
    const rentalPrice = propertyFor === 'rent' ? (onSale.isOnSale ? formattedNewPrice : formattedPrice) * rentalDays : 0;

    if (propertyFor === 'rent') {
      setTotalPrice(rentalPrice + extrasTotal);
    } else {
      setTotalPrice(formattedNewPrice + extrasTotal);
    }

  }, [selectedExtras, formattedNewPrice, formattedPrice, onSale.isOnSale, dateRange, propertyFor]);

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
    ...selectedExtras.filter(extra => extra.checked).map(extra => ({
      label: extra.label,
      span: `${extra.price}$`
    }))
  ].filter(Boolean);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as any;

    results.totalPrice = totalPrice;

    if (propertyFor === `rent`) {
      results[`dateRange`] = {
        // @ts-ignore
        from: dateRange[0].$d.toISOString(),
        // @ts-ignore
        to: dateRange[1].$d.toISOString()
      };
    }

    results.extras = selectedExtras;

    const validateRentSchema = rentPropertySchema.safeParse({
      dateRange: results.dateRange,
      totalPrice: results.totalPrice
    });

    if (propertyFor === `rent` && !validateRentSchema.success) {
      setErrorMessage(validateRentSchema.error.errors[0].message);
      setOpenSnackbar(true);
      return;
    }

    const validateSellSchema = sellPropertySchema.safeParse({
      totalPrice: results.totalPrice
    });

    if (propertyFor === `sell` && !validateSellSchema.success) {
      setErrorMessage(validateSellSchema.error.errors[0].message);
      setOpenSnackbar(true);
      return;
    }

    setErrorMessage(``);
    setOpenSnackbar(false);
    setBackdropOpen(true);

    results.propertyDetails = {
      propertyId,
      images,
      price,
      onSale,
      selectedExtras,
      title,
      propertyFor
    };

    results.landlordData = propertyDetails.landlordData;

    // push all three params of results, extras, propertyDetails and totalPrice
    // onto local storage
    localStorage.setItem(`checkoutData`, JSON.stringify(results));

    router.push(`/checkout`);
  }

  return (
    <>
      <BackdropMUI
        state={{ open: backdropOpen, setOpen: setBackdropOpen }}
        alertMessage={`Please wait while we process your request for renting/buying a property..`}
      />
      <SnackbarMUI
        state={{ open: openSnackbar, setOpen: setOpenSnackbar }}
        severity={`error`}
        message={errorMessage}
      />
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
            <LabelAndTextBadge label={`Location`}
                               text={location.length > 60 ? location.slice(0, 60) + `..` : location} />
            <LabelAndTextBadge label={`Selling Options`}
                               text={propertyFor === `rent` ? `Rent a Property` : `Buy a Property`} />
            {propertyFor === `rent` && (
              <div className={`flex flex-col gap-3.5 justify-center min-w-72 mt-2`}>
                <div className={`cursor-pointer`}>
                  <MUICalendar onChange={(newValue) => {
                    setDateRange(newValue);
                  }} />
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
              disabled={backdropOpen}
              className={`bg-linear-main-red flex text-white rounded-2xl w-full text-center justify-center text-xl font-bold px-5 py-4 mt-7 transition-all duration-200 
              ${backdropOpen ? `animate-pulse` : ``}`}>
              {propertyFor === `rent` ? `Rent` : `Buy`} Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}