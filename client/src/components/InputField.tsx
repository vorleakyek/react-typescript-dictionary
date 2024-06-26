type InputFieldProp = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolderText: string;
};

export default function InputField({
  value,
  onChange,
  placeHolderText,
}: InputFieldProp) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        className="mr-10"
        type="text"
        placeholder={placeHolderText}
      />
    </>
  );
}
