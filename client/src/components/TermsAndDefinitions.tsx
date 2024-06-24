import TermAndDefinition, { type TermDefProp } from './TermAndDefinition';

type TermsAndDefinitionsProp = {
  array: TermDefProp[];
};
export default function TermsAndDefinitions({
  array,
}: TermsAndDefinitionsProp) {
  return (
    <>
      {array.map((item: TermDefProp) => {
        return (
          <TermAndDefinition
            key={item.term}
            term={item.term}
            definition={item.definition}
          />
        );
      })}
    </>
  );
}
