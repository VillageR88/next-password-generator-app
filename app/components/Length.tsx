import { CSSProperties, useState } from 'react';
const title = 'Character Length';
export default function Length() {
  const [range, setRange] = useState<number>(10);

  return (
    <div className="flex h-[87px] w-full flex-col justify-between">
      <div className="flex h-[43px] w-full items-center justify-between">
        <span className="text-[18px] font-bold text-almostWhite">{title}</span>
        <span className="text-[32px] font-bold text-neonGreen">{range.toString()}</span>
      </div>
      <div
        style={
          {
            '--tw-gradient-from-position': ((range * 100) / 19).toString() + '%',
            '--tw-gradient-to-position': ((range * 100) / 19).toString() + '%',
          } as CSSProperties
        }
        className={`flex ${range === 1 ? 'rounded-l-full' : range === 19 ? 'rounded-r-full' : ''} h-[8px] w-full items-center self-center bg-gradient-to-r from-neonGreen to-[#18171F]`}
      >
        <label className="w-full" htmlFor="range">
          <input
            onChange={(e) => {
              setRange(e.target.valueAsNumber);
            }}
            value={range}
            max={19}
            min={1}
            className="mb-[10px] h-[28px] w-full"
            type="range"
            name="range"
            id="range"
          />
          {''}
        </label>
      </div>
    </div>
  );
}
