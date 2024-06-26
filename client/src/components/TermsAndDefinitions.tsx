import TermAndDefinition from './TermAndDefinition';
import { type Dictionary } from '../api';

type TermsAndDefinitionsProp = {
  array: Dictionary[];
  setter: React.Dispatch<React.SetStateAction<string>>;
};
export default function TermsAndDefinitions({
  array,
  setter,
}: TermsAndDefinitionsProp) {
  return (
    <>
      {array.map((item: Dictionary) => {
        return (
          <TermAndDefinition
            key={item.term}
            term={item.term}
            definition={item.definition}
            setDic={setter}
          />
        );
      })}
    </>
  );
}
