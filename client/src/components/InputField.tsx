type InputFieldProp = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolderText: string;
};

export default function InputField({
  onChange,
  placeHolderText,
}: InputFieldProp) {
  return (
    <>
      <input
        onChange={onChange}
        className="mr-10"
        type="text"
        placeholder={placeHolderText}
      />
    </>
  );
}
