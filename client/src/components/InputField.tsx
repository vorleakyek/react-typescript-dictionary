type InputFieldProp = {
  placeHolderText: string;
};

export default function InputField({ placeHolderText }: InputFieldProp) {
  return (
    <>
      <input className="mr-10" type="text" placeholder={placeHolderText} />
    </>
  );
}
