import TermAndDefinition from './TermAndDefinition';
import { type Dictionary } from '../api';

type TermsAndDefinitionsProp = {
  array: Dictionary[];
};
export default function TermsAndDefinitions({
  array,
}: TermsAndDefinitionsProp) {
  return (
    <>
      {array.map((item: Dictionary) => {
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
