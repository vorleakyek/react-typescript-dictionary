import dictionaryImg from './assets/3092324.jpg';
import './App.css';
import TermsAndDefinitions from './components/TermsAndDefinitions';
import InputField from './components/InputField';
import { useState, useEffect } from 'react';
// import TermAndDefinition from './components/TermAndDefinition';
import { type Dictionary, fetchDictionary, addTermAndDef } from './api';

export default function App() {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);
  const [term, setTerm] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');

  useEffect(() => {
    async function fetchingDict() {
      try {
        const data = await fetchDictionary();
        setDictionary(data);
      } catch (e) {
        throw new Error('error with fetch Dictionary');
      }
    }

    fetchingDict();
  }, [dictionary]);

  async function handleAddTerm() {
    const newTermAndDef = {
      term,
      definition,
    };

    try {
      const data = await addTermAndDef(newTermAndDef);
      setDefinition(data);
      setTerm('');
      setDefinition('');
      console.log(data);
    } catch (e) {
      throw new Error('error with adding new term and def');
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="half">
          <img src={dictionaryImg} alt="dictionary image" />
        </div>
        <div className="half">
          <div>
            <TermsAndDefinitions array={dictionary} setter={setDefinition} />
          </div>
          <div>
            <InputField
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              placeHolderText="term..."
            />
            <InputField
              value={definition}
              onChange={(event) => setDefinition(event.target.value)}
              placeHolderText="definition..."
            />
            <button onClick={handleAddTerm}>Add Term</button>
          </div>
        </div>
      </div>
    </div>
  );
}
