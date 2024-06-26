import { FaRegTrashCan } from 'react-icons/fa6';
import { fetchDictionary } from '../api';
// import { type Dictionary } from '../api';

export default function TermAndDefinition({ term, definition, setDic }) {
  async function handleDelete() {
    try {
      const res = await fetch(`/api/delete/${term}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        const result = await fetchDictionary();
        setDic(result);
      }
    } catch (e) {
      throw new Error('error in delete');
    }
  }

  return (
    <>
      <div className="text-right pl-20">
        <h2 className="mb-5">{term}</h2>
        <p className="inline m-0">{definition}</p>
        <button onClick={handleDelete}>
          <FaRegTrashCan />
        </button>
      </div>
    </>
  );
}
