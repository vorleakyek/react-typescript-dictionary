import TermAndDefinition from './TermAndDefinition';
import { type Dictionary } from '../api';

type TermsAndDefinitionsProp = {
  array: Dictionary[];
  setDic: React.Dispatch<React.SetStateAction<Dictionary[]>>;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  setDefinition: React.Dispatch<React.SetStateAction<string>>;
};
export default function TermsAndDefinitions({
  array,
  setDic,
}: TermsAndDefinitionsProp) {
  return (
    <>
      {array.map((item: Dictionary) => {
        return (
          <TermAndDefinition
            key={item.term}
            term={item.term}
            definition={item.definition}
            setDic={setDic}
          />
        );
      })}
    </>
  );
}
