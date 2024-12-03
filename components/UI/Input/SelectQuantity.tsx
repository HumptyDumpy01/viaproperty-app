type SelectQuantityType = {
  type?: `dark` | `light`;
  property: 'bedrooms' | 'bathrooms';
  quantity: { bedrooms: number; bathrooms: number };
  setQuantityStates: (quantityStates: { bedrooms: number; bathrooms: number }) => void;
};

export default function SelectQuantity({ type = `dark`, property, quantity, setQuantityStates }: SelectQuantityType) {
  const darkStyleButtons = `text-white bg-zinc-950`;
  const lightStyleButtons = `text-zinc-950 bg-zinc-300`;

  const handleIncrement = () => {
    setQuantityStates({ ...quantity, [property]: quantity[property] + 1 });
  };

  const handleDecrement = () => {
    if (quantity[property] > 0) {
      setQuantityStates({ ...quantity, [property]: quantity[property] - 1 });
    }
  };

  return (
    <>
      <div className={`flex gap-2.5`}>
        <button
          type={`button`}
          onClick={handleDecrement}
          className={`${type === `dark` ? darkStyleButtons : lightStyleButtons} w-7 h-[29px] flex items-center justify-center text-xl rounded-[2px]`}>-
        </button>
        <span className={`text-zinc-900 font-bold text-[19px]`}>{quantity[property]}</span>
        <button
          type={`button`}
          onClick={handleIncrement}
          className={`${type === `dark` ? darkStyleButtons : lightStyleButtons} w-7 h-[29px] flex items-center justify-center text-xl rounded-[2px]`}>+
        </button>
      </div>
      <input type="hidden" name={property} value={quantity[property]} />
    </>
  );
}