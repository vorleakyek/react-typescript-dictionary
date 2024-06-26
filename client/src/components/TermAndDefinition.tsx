import { FaRegTrashCan, FaPencil } from 'react-icons/fa6';
import { fetchDictionary } from '../api';
import { useState } from 'react';

export default function TermAndDefinition({ term, definition, setDic }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTerm, setEditTerm] = useState(term);
  const [editDef, setEditDef] = useState(definition);

  async function handleDelete() {
    try {
      const res = await fetch(`/api/delete/${editTerm}`, {
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

  async function handleEdit() {
    const res = await fetch('/api/update/term-definition', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        term,
        editTerm,
        editDef,
      }),
    });

    if (res.ok) {
      const result = await fetchDictionary();
      setDic(result);
    }

    setIsEdit(false);
  }

  return (
    <>
      <div className="text-right pl-20">
        <h2 className="mb-5">{term}</h2>
        <p className="inline m-0">{definition}</p>
        <button onClick={handleDelete}>
          <FaRegTrashCan />
        </button>
        <button onClick={() => setIsEdit(true)}>
          <FaPencil />
        </button>
      </div>
      {isEdit && (
        <div>
          <input
            value={editTerm}
            onChange={(event) => setEditTerm(event.target.value)}
          />
          <input
            value={editDef}
            onChange={(event) => setEditDef(event.target.value)}
          />
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </>
  );
}
