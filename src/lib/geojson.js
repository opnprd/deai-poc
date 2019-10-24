import { get } from './http.js';

async function getDataset ({ id, source }) {
  const data = await get(source);
  return { id, data };
}

export async function getDatasets(sources) {
  const dataGetters = sources.map(getDataset);

  const objectifer = (acc, {id, data}) => {
    acc[id] = data;
    return acc;
  };
  return (await Promise.all(dataGetters)).reduce(objectifer, {});
}
