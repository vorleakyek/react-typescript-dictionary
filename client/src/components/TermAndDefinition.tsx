import { FaRegTrashCan } from 'react-icons/fa6';

export type TermDefProp = {
  term: string;
  definition: string;
};

export default function TermAndDefinition({ term, definition }: TermDefProp) {
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
