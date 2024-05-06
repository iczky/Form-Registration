import { useField } from "formik";

interface TextinputProps {
  name: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const TextInput: React.FC<TextinputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 pt-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} className="rounded-lg text-lg py-2 px-2" />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600 font-mono font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;
