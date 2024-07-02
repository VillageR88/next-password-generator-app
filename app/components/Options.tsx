const options = [
  { id: 1, label: 'Include Uppercase letters' },
  { id: 2, label: 'Include Lowercase Letters' },
  { id: 3, label: 'Include Numbers' },
  { id: 4, label: 'Include Symbols' },
];

export default function Options() {
  return (
    <ul className="mt-[40px] flex w-full flex-col justify-between gap-[20px]">
      {options.map((option) => (
        <li className="group/checkBox" key={option.id}>
          <label
            htmlFor={option.label}
            className="relative z-10 flex w-fit items-center gap-[24px] hover:cursor-pointer"
          >
            <svg
              className="absolute left-[3px] opacity-0 transition group-has-[input:checked]/checkBox:opacity-100"
              width="14"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
            </svg>
            <input id={option.label} name={option.label} className="mb-[2px] size-[20px]" type="checkbox" />
            <span className="text-[18px] font-bold text-almostWhite">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
