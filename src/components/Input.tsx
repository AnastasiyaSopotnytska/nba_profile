import { clsx } from "clsx";

interface InputProps {
  value: string;
  label: string;
  name: string;
  setValue: (val: string) => void,
  placeholder?: string;
  error?: string,
}

export const Input = (props: InputProps) => {
  const { 
    value,
    name,
    placeholder,
    setValue,
    label,
    error
} = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xs text-[#757575]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        className={clsx(
          "h-12 w-48 px-4 py-3 text-main bg-none border-[#BDBDBD] border rounded",
          error && "border-red-500 text-red-500"
        )}
      />
      {error && (
        <span>{error}</span>
      )}
    </div>
  );
};
