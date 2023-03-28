import { useId } from 'react';

const Input = ({
  name,
  type = 'text',
  label,
  required,
  autoComplete,
}: {
  type?: string;
  name: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
}) => {
  const id = useId();
  const inputClass =
    'peer block w-full appearance-none border-0 border-b border-black bg-transparent py-2.5 px-0 text-sm text-black caret-primary-yellow focus:border-primary-yellow focus:outline-none focus:ring-0';

  return (
    <div className="group relative z-0 mb-6 w-full">
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={id}
          className={inputClass}
          placeholder=" "
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          className={inputClass}
          placeholder=" "
          autoComplete={autoComplete}
          required={required}
        />
      )}
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary-yellow"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
