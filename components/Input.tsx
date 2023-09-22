export interface FormProps {
  type: string;
  label: string;
  placeholder: string;
  isRequired: boolean;
  handleChange: (e: any) => void;
}

export function InputPart({
  type,
  label,
  placeholder,
  isRequired,
  handleChange,
}: FormProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="border border-gray py-3 px-5 rounded-lg focus:border-blue-light focus:outline-none "
        type={type}
        name={label}
        id={label}
        required={isRequired}
        onChange={handleChange}
      />
    </div>
  );
}
