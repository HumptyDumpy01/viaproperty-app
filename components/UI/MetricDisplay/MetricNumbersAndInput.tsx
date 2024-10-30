// 'use client';

type MetricNumbersAndInputType = {
  metric: string;
  btnClicked: boolean;
  defaultValue: number;
  inputName: string;
  editable: boolean;
  // children: ReactNode;
}

export default function
  MetricNumbersAndInput({
                          metric,
                          btnClicked,
                          defaultValue,
                          inputName,
                          editable
                        }: MetricNumbersAndInputType) {
  return (
    <>
      <div className={`flex items-center gap-2`}>
        <span className={`text-zinc-900`}>{metric}</span>
        <input readOnly={!btnClicked}
               name={inputName}
               className={`truncate font-semibold text-center border-b border-transparent w-7 
               text-zinc-900 focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
               placeholder={`0`}
               defaultValue={defaultValue}
               min={0}
        />
      </div>
    </>
  );
}
