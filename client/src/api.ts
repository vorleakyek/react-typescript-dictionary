export type Dictionary = {
  term: string;
  definition: string;
};

export async function fetchDictionary(): Promise<Dictionary[]> {
  const res = await fetch('api/dictionary', {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error(`fetchDictionary error ${res.status}`);
  return await res.json();
}

export async function addTermAndDef(content: Dictionary) {
  const res = await fetch('api/addTermAndDefinition', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(content),
  });

  if (!res.ok) {
    throw new Error('Error in adding a new term and definition');
  }

  return await res.json();
}
