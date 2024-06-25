import { FaRegTrashCan } from 'react-icons/fa6';
import { type Dictionary } from '../api';

export default function TermAndDefinition({ term, definition }: Dictionary) {
  return (
    <>
      <div className="text-right pl-20">
        <h2 className="mb-5">{term}</h2>
        <p className="inline m-0">{definition}</p>
        <button>
          <FaRegTrashCan />
        </button>
      </div>
    </>
  );
}
