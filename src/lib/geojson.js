import { get } from './http.js';

async function getDataset ({ id, name, source, options }) {
  if (!id) throw new Error('Need to provide an ID for a dataset');
  if (!source) throw new Error('Need to provide an Source for a dataset');
  if (!name) name = id;
  const data = await get(source);
  return { id, name, data, options };
}

export async function getDatasets(sources) {
  const dataGetters = sources.map(getDataset);

  const objectifer = (acc, {id, name, data, options}) => {
    acc[id] = {
      name,
      data,
      options,
    };
    return acc;
  };
  return (await Promise.all(dataGetters)).reduce(objectifer, {});
}
