// 'use client';

import { motion } from 'framer-motion';

type ViapropertyButtonType = {
  bgColor: `bg-linear-main-red` | `bg-linear-main-dark-blue`;
  label: string;
  btnType?: `button` | `submit` | `reset`;
  disabled?: boolean;
  // children: ReactNode;
}

export default function
  ViapropertyButton({
                      bgColor,
                      label,
                      btnType = `submit`,
                      disabled = false
                    }: ViapropertyButtonType) {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: `#222`
        }}
        disabled={disabled}
        whileTap={{ scale: 0.9 }}
        type={btnType}
        className={`text-xl ${bgColor} px-14 py-5 text-white rounded-3xl font-bold
              transition-all`}>{label}
      </motion.button>
    </>
  );
}
