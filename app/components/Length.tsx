'use client';

import { DataContext } from '../_providers/DataContext';
import { CSSProperties, useContext } from 'react';
const title = 'Character Length';

export default function Length() {
  const { settings, setSettings } = useContext(DataContext);
  return (
    <div className="flex h-[64px] w-full flex-col justify-between sm:h-[80px]">
      <div className="flex w-full items-center justify-between">
        <span className="text-[16px] font-bold text-almostWhite sm:text-[18px]">{title}</span>
        <span className="text-[24px] font-bold text-neonGreen sm:text-[32px]">{settings.length.toString()}</span>
      </div>
      <div
        style={
          {
            '--tw-gradient-from-position': ((settings.length * 100) / 19).toString() + '%',
            '--tw-gradient-to-position': ((settings.length * 100) / 19).toString() + '%',
          } as CSSProperties
        }
        className={`flex ${settings.length === 1 ? 'rounded-l-full' : settings.length === 19 ? 'rounded-r-full' : ''} h-[8px] w-full items-center self-center bg-gradient-to-r from-neonGreen to-[#18171F]`}
      >
        <label className="w-full" htmlFor="range">
          <input
            onChange={(e) => {
              setSettings((value) => ({ ...value, length: e.target.valueAsNumber }));
            }}
            value={settings.length}
            max={19}
            min={1}
            className="h-[28px] w-full"
            type="range"
            name="range"
            id="range"
            typeof="number"
          />
          {''}
        </label>
      </div>
    </div>
  );
}
