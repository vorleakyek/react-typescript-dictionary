import dictionaryImg from './assets/3092324.jpg';
import './App.css';
import TermsAndDefinitions from './components/TermsAndDefinitions';
import InputField from './components/InputField';

const terms = [
  {
    term: 'Ebullient',
    definition: 'Cheerful and full of energy.',
  },
  {
    term: 'Propitious',
    definition: 'Giving or indicating a good chance of success; favorable.',
  },
];

export default function App() {
  return (
    <div>
      <div className="flex">
        <div className="half">
          <img src={dictionaryImg} alt="dictionary image" />
        </div>
        <div className="half">
          <div>
            <TermsAndDefinitions array={terms} />
          </div>
          <div>
            <InputField placeHolderText="term..." />
            <InputField placeHolderText="definition..." />
            <button>Add Term</button>
          </div>
        </div>
      </div>
    </div>
  );
}
