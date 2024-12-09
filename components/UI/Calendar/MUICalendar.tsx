'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimeRangePicker } from '@mui/x-date-pickers-pro/MobileDateTimeRangePicker';

export default function MUICalendar({ onChange }: { onChange: (date: [dayjs.Dayjs, dayjs.Dayjs]) => void }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimeRangePicker
        // @ts-ignore
        onChange={(date) => onChange(date)}
        name="date"
        defaultValue={[dayjs(), dayjs().add(7, 'day')]}
      />
    </LocalizationProvider>
  );
}